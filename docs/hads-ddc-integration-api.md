# HADS + Drag & Drop Card integration API

This is the API contract Drag & Drop Card can use for a deeper HADS integration.
The card already falls back to a bundled marketplace snapshot when these endpoints are not available.

## Goals

- Show a live HADS catalog inside the card picker.
- Let users connect their HADS account from Drag & Drop Card without sharing Home Assistant credentials.
- Show owned/downloadable listings in the picker.
- Later, allow one-click import of purchased/free card and dashboard packages.

## Browser requirements

Drag & Drop Card runs inside a Home Assistant browser session, so the HADS API must support CORS.

Recommended headers:

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Authorization, Content-Type
Content-Type: application/json
```

If credentials/cookies are required, replace `*` with the requesting Home Assistant origin and return `Access-Control-Allow-Credentials: true`. Token-based auth is preferred.

## Public catalog

```http
GET /api/ddc/catalog?client=drag-and-drop-card
```

Response:

```json
{
  "version": 1,
  "generated_at": "2026-07-08T12:00:00Z",
  "listings": [
    {
      "id": "hads-weather-cards",
      "slug": "hads-weather-cards",
      "title": "HADS Weather Cards",
      "type": "card",
      "summary": "Weather-focused dashboard cards.",
      "image_url": "https://hads.smarti.dev/static/uploads/example.png",
      "url": "https://hads.smarti.dev/d/hads-weather-cards",
      "price": { "label": "1.99 USD", "amount": 1.99, "currency": "USD" },
      "badge": "",
      "tags": ["weather", "card"],
      "requires_auth": true,
      "owned": false
    }
  ]
}
```

Allowed `type` values:

- `card`
- `dashboard`

## Device login

Use a device-code flow so tokens never pass through a URL and Home Assistant credentials are never involved.

```http
POST /api/ddc/auth/device
Content-Type: application/json
```

Request:

```json
{
  "client": "drag-and-drop-card",
  "origin": "https://homeassistant.local:8123",
  "location": "https://homeassistant.local:8123/lovelace/home"
}
```

Response:

```json
{
  "device_code": "opaque-device-code",
  "user_code": "ABCD-EFGH",
  "verification_uri": "https://hads.smarti.dev/device",
  "verification_uri_complete": "https://hads.smarti.dev/device?user_code=ABCD-EFGH",
  "expires_in": 600,
  "interval": 3
}
```

Drag & Drop Card opens `verification_uri_complete` and polls for completion.
The HADS verification/login page should include a visible create-account path for users who do not already have a HADS user.
Drag & Drop Card also opens this route from its HADS account panel:

```http
GET /signup
```

After creating an account, redirect back into the normal device verification/login flow when possible.

```http
POST /api/ddc/auth/device/token
Content-Type: application/json
```

Pending response:

```http
428 Precondition Required
```

```json
{ "error": "authorization_pending" }
```

Completed response:

```json
{
  "access_token": "opaque-access-token",
  "token_type": "Bearer",
  "expires_in": 86400,
  "user": {
    "id": "user_123",
    "name": "Vetle",
    "email": "vetle@example.com"
  }
}
```

Recommended scopes:

- `catalog:read`
- `library:read`
- `package:download`

## Current user

```http
GET /api/ddc/me
Authorization: Bearer <access_token>
```

Response:

```json
{
  "user": {
    "id": "user_123",
    "name": "Vetle",
    "email": "vetle@example.com"
  }
}
```

## User library

```http
GET /api/ddc/library
Authorization: Bearer <access_token>
```

Response:

```json
{
  "listings": [
    {
      "slug": "the-starter-dashboard",
      "owned": true,
      "download_url": "https://hads.smarti.dev/api/ddc/listings/the-starter-dashboard/package"
    }
  ]
}
```

The public catalog may also include `owned` and `download_url` when the same request is authenticated.

## Package download

```http
GET /api/ddc/listings/:slug/package
Authorization: Bearer <access_token>
```

Response should be one of the existing Drag & Drop Card import formats:

- Full dashboard export: `{ "version": 3, "options": {}, "cards": [], "responsive_layouts": {} }`
- Single card export: `{ "kind": "ddc-card", "version": 2, "entry": { "card": {} } }`

Drag & Drop Card imports single-card packages directly from the picker when the user is signed in to HADS and the listing has:

```json
{
  "owned": true,
  "download_url": "https://hads.smarti.dev/api/ddc/listings/example/package"
}
```

Free listings should still require a HADS user/session when imported from Drag & Drop Card. They may remain downloadable without an account directly on the HADS website, but the in-card `Download & import` flow always sends `Authorization: Bearer <access_token>`.

After a successful direct import, Drag & Drop Card marks the listing as locally owned/imported while the HADS account is connected, so it appears under the HADS `Owned cards` section even before the next live library sync. When there is no active HADS session, Drag & Drop Card hides `Owned cards` and treats the catalog as marketplace-only.

For paid listings the endpoint should return:

```http
403 Forbidden
```

```json
{ "error": "not_owned", "message": "Purchase required." }
```

## Error shape

Use this shape for all JSON errors:

```json
{
  "error": "machine_readable_code",
  "message": "Human readable message"
}
```

## Security notes

- Do not accept or request Home Assistant tokens.
- Keep HADS access tokens scoped and short lived.
- Device codes should expire quickly and be single use.
- Package downloads should be permission checked server side.
- Avoid putting access tokens in URLs.
