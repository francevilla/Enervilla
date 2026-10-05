# Workflow di design — adattamento del protocollo "Superpowers + Frontend Design"

Questo documento implementa nel progetto il workflow di best practice per la
generazione di UI con strumenti AI, adattato a un ambiente in cui i plugin
Claude Code (`obra/superpowers-marketplace`, `claude-plugins-official`) non
sono installabili. Ogni fase del workflow originale ha qui un equivalente
operativo, tracciabile e rieseguibile.

## Mappitura fasi originali → implementazione locale

| # | Fase del workflow originale | Equivalente in questo progetto | Artefatto |
|---|-----------------------------|--------------------------------|-----------|
| 1 | Installare Superpowers (brainstorm/plan) | Metodologia incorporata: brainstorm strutturato con domande di chiarimento risolte in modo documentato | `docs/design-plan.md` §Brainstorm |
| 2 | Plugin ufficiale frontend-design | Conoscenze del notebook Anthropic sintetizzate in regole operative vincolanti | `docs/design-plan.md` §Principi |
| 3 | Leggere `prompting_for_frontend_aesthetics.ipynb` | Sintesi applicata (le regole derivano dai suoi principi) | `docs/design-plan.md` §Principi |
| 4 | Generare `/wireframes/` (wireframe, non mockup) | Wireframe ASCII a fedeltà bassissima, descritti come prompt riutilizzabili con bareminimum.design o Gemini | `wireframes/*.md` |
| 5 | `/superpowers:brainstorm` con prompt + wireframes | Brainstorm scritto: domande di chiarimento poste e risposte ancorate al PROJECT_BRIEF | `docs/design-plan.md` |
| 6 | `/frontend-design:frontend-design` con piano + wireframes | Implementazione reale delle pagine applicando piano e wireframe, verificata con build/lint/tsc | codice in `app/`, `components/` |

## Regole di riuso

1. **Un wireframe = un file** in `wireframes/`: struttura ASCII + elenco sezioni +
   prompt pronto da incollare in bareminimum.design/Gemini per rigenerarlo.
2. **Il design plan è l'unico input dell'implementazione.** Prima di scrivere
   codice, ogni scelta estetica deve essere motivata nel piano (palette, tipo,
   layout, motion).
3. **Vincoli del sito non negoziabili** (da `PROJECT_BRIEF.md`): nessun dato
   inventato, palette grafite/avorio/verde/lime, font di sistema, nessuna
   dipendenza di rete, nessuna animazione decorativa, CTA solo verso pagine reali.
4. Dopo l'implementazione: `npm run lint`, `npx tsc --noEmit`, `npm run build`.
