# AgencyFlow

SaaS multi-tenant per agenzie immobiliari. Gestisci annunci, CRM clienti, calendario visite e analytics da un'unica piattaforma.

## Funzionalità

- **Multi-tenant** — ogni agenzia ha dati isolati con autenticazione dedicata
- **Annunci immobiliari** — CRUD completo con tipologia, stato e prezzo
- **CRM** — pipeline lead con stati e note
- **Calendario** — appuntamenti collegati a contatti e immobili
- **Dashboard** — KPI e panoramica commerciale
- **Abbonamenti Stripe** — piano Pro a €49/mese con prova gratuita 14 giorni

## Stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS
- Prisma 7 + SQLite (sviluppo)
- Stripe Checkout + Billing Portal
- Autenticazione session-based con cookie httpOnly

## Avvio rapido

```bash
# Installa dipendenze
npm install

# Crea database e applica migrazioni
npm run db:migrate

# Popola dati demo
npm run db:seed

# Avvia in sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

### Account demo

- **Email:** `marco@immobiliarerossi.it`
- **Password:** `demo1234`

Oppure registra una nuova agenzia da `/register`.

## Stripe (€49/mese)

1. Copia `.env.example` in `.env` e aggiungi le chiavi da [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys):
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

2. **Webhook locale** (in un terminale separato):
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   Copia il `whsec_...` generato in `STRIPE_WEBHOOK_SECRET`.

3. **Opzionale** — crea un Product "AgencyFlow Pro" a €49/mese in Stripe e imposta `STRIPE_PRICE_ID=price_...`. Senza questo, il checkout crea il prezzo dinamicamente.

4. Vai su `/dashboard/billing` → **Abbonati ora** per testare con carta `4242 4242 4242 4242`.

Nuove agenzie hanno **14 giorni di prova gratuita**, poi serve l'abbonamento attivo.

## Struttura

```
src/
  app/
    dashboard/       # Area riservata agenzie
    api/             # REST API
    login/ register/ # Autenticazione
  components/        # UI e moduli
  lib/               # Auth, DB, validazioni
prisma/
  schema.prisma      # Modelli dati
  seed.ts            # Dati demo
```

## Produzione

Per il deploy in produzione, sostituisci SQLite con PostgreSQL:

1. Cambia `provider` in `prisma/schema.prisma` a `postgresql`
2. Imposta `DATABASE_URL` con la connection string PostgreSQL
3. Esegui `npm run db:migrate`
