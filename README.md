# SEO2026

> The first deterministic engine for the next era of social search intelligence.

SEO2026 is a next-generation discovery engine optimization platform built for the era of **Generative Search**. As AI-powered search engines reshape how users discover content, traditional SEO tactics are becoming obsolete. Our deterministic engine analyzes your content through the lens of Large Language Models, identifying semantic entities, mapping search intent, and generating optimized metadata that maximizes visibility in AI-synthesized results.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Convex (serverless) |
| Auth | Custom PBKDF2/SHA-256 (Web Crypto API) |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | Lucide React |

---

## Features

- **Deterministic Engine Output** — Structured SEO analysis from any input
- **AI Simulation** — Predict how GPT-4, Claude, and Gemini will interpret your content
- **Intent Mapping** — Align content with transactional, informational, and comparative intents
- **Entity Optimization** — Build topical authority through semantic entity density
- **Gap Analysis** — Reverse-engineer competitor strategies
- **Schema Builder** — Auto-generate JSON-LD markup
- **Content Structure** — Generate H1/H2/H3 hierarchies for featured snippets
- **Compliance Auditor** — E-E-A-T and accessibility auditing
- **History & Reports** — Save, share, and revisit past analyses

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/MelroseSaint/SEO2026.git
cd SEO2026

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The app runs at `http://localhost:8080`.

---

## Environment Setup

Create a `.env.local` file in the project root:

```env
VITE_CONVEX_URL=https://compassionate-bass-55.convex.cloud
```

---

## Deployment

### Frontend (Vercel)

Pushing to `main` auto-deploys to Vercel.

### Backend (Convex)

Deploy Convex functions and schema:

```bash
npx convex deploy
```

This pushes:
- `convex/auth.ts` — Signup / login with rate limiting
- `convex/analyses.ts` — Save and retrieve analyses
- `convex/health.ts` — Backend health check
- `convex/schema.ts` — Database schema

---

## Architecture

```
src/
  pages/           # Route-level pages
  components/      # Reusable UI components
    auth/          # Login & signup forms
    landing/       # Landing page sections
    layout/        # Navbar
    ui/            # shadcn/ui primitives
  context/         # React context (Auth, Plan)
  hooks/           # Custom hooks
  lib/             # Utilities & Convex client
convex/
  auth.ts          # Authentication mutations
  analyses.ts      # Analysis CRUD
  health.ts        # Health check query
  schema.ts        # Database schema
```

---

## Security

- **Password Hashing:** PBKDF2 with SHA-256, 100k iterations, 128-bit random salt
- **Rate Limiting:** 5 signup / 10 login attempts per 15-minute window
- **Data Isolation:** User-scoped analysis history
- **Encryption:** TLS 1.3 in transit, AES-256 at rest (Convex managed)

---

## Plans

| Plan | Price | Key Features |
|------|-------|-------------|
| **Starter** | $49/mo | 50 credits, basic entity mapping, standard schema |
| **Professional** | $149/mo | Unlimited analysis, AI simulation, competitor intel, API access |
| **Enterprise** | Custom | Custom LLM training, white-label reports, dedicated strategist |

---

## License

MIT

---

Built with ❤️ for the future of search.
