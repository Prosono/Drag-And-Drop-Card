# HADS Sauna Card · 1.0.0

Et rolig oversiktskort for badstuen, med velkomst fra en sensor, dato og klokkeslett, målt temperatur, to valgfrie sensorfelt, egen logo og justerbart utseende.

## Import og oppsett

Importer **hads-sauna-card-1-0-0.json** som enkeltkort i Drag & Drop Card. Åpne innstillingene øverst til høyre og velg:

- **Sensor med gjestens navn:** Sensorens tilstand settes etter «Velkommen,». Kan bruke `sensor` eller `input_text`. Uten gyldig navn vises bare «Velkommen.».
- **Temperatur i badstuen:** En sensor, eller en `climate`-entitet der `current_temperature` brukes. Kortet viser den målte temperaturen, ikke termostatens innstilte verdi. Sensorens enhet beholdes.
- **Ekstra verdi 1 og 2:** Valgfrie sensorer og egne overskrifter. Forslagene er luftfuktighet og status. Felter uten valgt entitet skjules.
- **Logo fra URL:** En full HTTP(S)-adresse eller en lokal Home Assistant-sti, som `/local/badstue/logo.png`. Logoens høyde kan justeres. Ingen URL viser et diskret badstuesymbol. Logoens opprinnelige farger beholdes.
- **Bakgrunnsbilde:** Egen URL eller det medfølgende bildet. Bildets synlighet og horisontale fokus kan endres.
- **Farger:** Bakgrunn, tekst og detaljer velges hver for seg.
- **Klokke:** Norsk/engelsk, med eller uten sekunder. Tidssonen følger Home Assistant hvis den er tilgjengelig, ellers nettleseren. Kan overstyres med for eksempel `Europe/Oslo`.

Innstillingene lagres i kortkonfigurasjonen gjennom DDCs lagringsbro, med en lokal reservekopi i nettleseren. Hvis delt lagring ikke bekreftes, vises en melding om dette. `unknown` og `unavailable` blir ikke erstattet med oppdiktede navn eller målinger. Et bilde som ikke kan lastes, faller tilbake til standardbildet eller symbolet.

JSON-filen inneholder både kode og bakgrunnsbildet. Ingen bildefiler må kopieres separat til Home Assistant. Standardstørrelse er 940 × 580 px, med egne mobilvarianter på 340 × 740 px. Kortet tilpasser innholdet ved endring av størrelse og kan rulles hvis høyden blir liten.

## Lokal forhåndsvisning

Fra repoets rot:

```sh
node scripts/generate-hads-sauna-card.mjs
python3 -m http.server 8765 --bind 127.0.0.1
```

Åpne `http://127.0.0.1:8765/examples/hads-sauna-card/preview.html`.

Forhåndsvisningen bruker den faktiske HTML-kortmotoren, men bare simulerte sensorer. Klokken viser virkelig tid. Eksempellogoen `assets/demo-logo.svg` er kun for lokal testing. Importpakken inneholder ingen testentiteter eller forhåndsvalgt logo.

## Kilder og verifisering

Koden ligger i `scripts/hads-sauna-card/`. Felles innstillinger og lagring gjenbruker `scripts/hads-control-cards/shared.js`. Generatoren bygger den selvstendige importfilen.

`node --test test/hads-sauna-card.test.js` kontrollerer sensorverdier, manglende data, klimatermostaters målte temperatur, tillatte bilde-URL-er og eksportpakken. Legg `?verify=1` til forhåndsvisningens URL for sju nettlesersjekker av gjesteoppdateringer, dato/klokke, logo, farger, bildeproblemer, lagring, gjenskaping og opprydding. Testene bruker og nullstiller demoens egne innstillinger.

Kortet er testet med simulerte Home Assistant-data. Det er ikke verifisert mot brukerens fysiske badstue eller ekte backendlagring.

## Bakgrunnsbilde

`assets/sauna-morning.jpg` er laget med det innebygde imagegen-verktøyet, deretter konvertert til JPEG for en mindre importpakke. Ingen ekstern bildetjeneste kontaktes ved bruk av standardbildet.

Genereringsprompt:

> Use case: photorealistic-natural. Asset type: background photograph for a professional sauna welcome dashboard. Create a wide landscape architectural photograph of an empty premium Scandinavian sauna, pale natural ash timber benches and delicate vertical wood slats, large panoramic window on the right looking onto calm Nordic water, soft mist and fresh muted green trees. Bright airy morning daylight, warm cream and honey wood, gentle sage hues, serene welcoming wellness atmosphere, immaculate realistic materials, refined architectural magazine photography. Composition: unobtrusive pale timber wall on left, beautifully framed benches and window across the right half, restful uncluttered negative space; no people, no text, no branding, no watermark, no interface. Landscape 3:2 or 16:9.
