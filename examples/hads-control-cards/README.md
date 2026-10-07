# HADS Control Cards · 1.0.0

Tre selvstendige JSON-pakker for Drag & Drop Cards innebygde HTML-kort. Hver fil inneholder HTML, CSS, JavaScript og innstillinger. Ingen eksterne biblioteker, skriftnedlastinger eller bildeavhengigheter.

| Pakke | Innhold | Design |
| --- | --- | --- |
| `hads-cover-control-1-0-0.json` | Åpne, stoppe, lukke, åpning i prosent og støttet lamellvinkel | Persienner, gardiner, garasjeport |
| `hads-room-control-1-0-0.json` | Temperatur, luftfuktighet, CO₂, tilstedeværelse og tre handlinger | Stue, romskisse, minimal |
| `hads-energy-flow-1-0-0.json` | Sol, nett, batteri, bolig og elbillading med retningsbestemt flyt | Flytdiagram, sirkler, liste |

## Bruk

1. Importer ønsket JSON-fil med Drag & Drop Cards importfunksjon for enkeltkort.
2. Trykk på innstillingsknappen øverst til høyre i kortet.
3. Velg entiteter, design, navn og eventuelt tema og språk. Trykk **Lagre**.
4. Tilpass kortets størrelse på dashboardet. Smale kort får et stablet oppsett; innholdet kan rulles når høyden er liten.

Pakkene har ingen forhåndsvalgte entiteter og viser ingen oppdiktede målinger. Demodata finnes bare i forhåndsvisningen. Alle kort har norsk/engelsk språk, lyst/mørkt tema, aksentfarge, tastaturbetjening, innstillingsdialog med fokusavgrensning og støtte for redusert bevegelse. Automatisk språk og tema følger Home Assistant.

Standardstørrelser er 580 × 480, 450 × 650 og 460 × 570 px. Mobilvariantene har bredde 320 px og ekstra høyde. Desktop og nettbrett bruker basisdefinisjonen. Mobileksportene inneholder også hele kortdefinisjonen fordi importmotoren krever dette for å lese variantens størrelse. Alle bruker samme konfigurasjon ved import; innstillingsendringer oppdaterer dashboardets responsive varianter.

## Entiteter og oppførsel

**Cover Control:** Velg én `cover.*`. Betjeningen følger `supported_features`; posisjons- og vinkelregulering vises bare når enheten støtter dem. 0 % er lukket og 100 % er åpen. Et kort kan vise åpen/lukket status selv når prosentvis posisjon ikke er kjent. Mer informasjon: [Home Assistants cover-modell](https://developers.home-assistant.io/docs/core/entity/cover/) og [funksjonsflaggene](https://github.com/home-assistant/core/blob/dev/homeassistant/components/cover/const.py).

**Room Control:** Sensorvelgerne filtrerer på `temperature`, `humidity` og `carbon_dioxide`. Tilstedeværelse bruker en binærsensor med `occupancy`, `presence` eller `motion`. Handlingene kan kobles til `light`, `switch`, `input_boolean`, `scene` eller `script`. De første tre veksler på/av; scener og skript aktiveres med `turn_on`. En scene som ennå har `unknown` som tilstand, kan fortsatt aktiveres. Enheter med `unavailable` er deaktivert. Trykk på en måling for Home Assistants detaljvisning.

**Energy Flow:** Velg sensorer som måler **effekt**, med enhet `W`, `kW` eller `MW`. Energisensorer med `kWh` skal ikke brukes. Kortet viser øyeblikksverdier, ikke historikk eller strømkostnad.

- Nettmåleren må ha én signert nettoverdi. Velg om positiv verdi betyr import eller eksport.
- Batterimåleren må ha én signert nettoverdi. Velg om positiv verdi betyr utlading eller lading.
- Sol, målt boligforbruk og elbillading skal ha ikke-negative verdier.
- Bolig kan leses fra en egen sensor. Uten denne beregnes `sol + netto fra nett + netto fra batteri`, etter justering av fortegn. Velg alle aktuelle kilder for å få riktig total. Uvalgte kilder er utelatt fra beregningen.
- Elbillading **inngår allerede i boligens total** og legges ikke til en gang til. Dette kortet forutsetter at valgt boligforbruk omfatter laderen.
- Hvis en valgt kilde mangler gyldige data, vises ukjent beregnet forbruk. En negativ beregnet total utløser beskjed om å kontrollere fortegn og målinger.
- Batterinivå er valgfritt og krever en egen sensor med `%` som enhet.

## Lagring

Innstillingene skrives til kortets konfigurasjon, wrapperens eksportcache og responsive konfigurasjoner før `ddc.saveLayout(true)` kalles. En lokal reservekopi er avgrenset til dashboardets lagringsnøkkel og kortets ID. Hvis backendlagring ikke kan bekreftes, sier kortet dette eksplisitt. Forhåndsvisningen har ingen backend og vil derfor vise melding om lokal lagring.

## Forhåndsvisning og utvikling

Kjør fra repoets rot:

```sh
node scripts/generate-hads-control-cards.mjs
python3 -m http.server 8765 --bind 127.0.0.1
```

Åpne `http://127.0.0.1:8765/examples/hads-control-cards/preview.html`. Forhåndsvisningen bruker repoets faktiske `DdcHtmlCard` med simulerte Home Assistant-entiteter. Knappetrykk påvirker bare disse testdataene. Tema, språk, 300 px brede kort og datatap kan prøves i verktøylinjen.

Kildene ligger i `scripts/hads-control-cards/`. Endre disse og kjør generatoren; JSON-filene er genererte leveranser. Forhåndsvisningen krever en lokal HTTP-server for modulimportene, mens de tre JSON-pakkene er selvstendige etter import i DDC.

## Verifisering

`npm test` kjører prosjektets tester, inkludert effektberegning, fortegn, manglende data, eksportformat og import av alle tre filer gjennom DDCs faktiske importmotor.

Åpne forhåndsvisningen med `?verify=1` for ni integrasjonssjekker i nettleseren: tomtilstand, cover-funksjoner og tjenestekall, manglende data, romhandlinger, første sceneaktivering, energiflyt, lagringsbro, gjenskaping av kortet og opprydding ved frakobling. Testene oppretter bare midlertidige kort med syntetiske data og rydder opp etter seg.

Alle ni design er visuelt kontrollert, inkludert smale kort og lyst/mørkt tema. Fysiske enheter og lagring mot en virkelig Home Assistant-instans er ikke testet her.
