# CLAUDE.md – dpia-sk

Project-specific instructions for Claude Code when working in this directory.

## Project Overview

**dpia.sk** is a Slovak content and marketing portal about DPIA (Data Protection Impact Assessment / Posúdenie vplyvu na ochranu osobných údajov).

Goal: publish practical Slovak content about DPIA, build SEO, validate interest before building the dpia.ai SaaS product.

## What this project is NOT

- Not a SaaS application
- No login, no user accounts
- No database (no Supabase, no Prisma)
- No payments (no Stripe)
- No admin panel
- No CMS

## Tech Stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS v3
- Resend v6 for email capture (contacts API with topics)
- All pages are static (pre-rendered), except `/api/subscribe` (dynamic)
- Vercel deployment

## Project Structure

```
app/                        # Next.js App Router pages
  page.tsx                  # Homepage
  co-je-dpia/               # What is DPIA
  kedy-je-dpia-povinne/     # When is DPIA mandatory
  ako-vypracovat-dpia/      # How to create DPIA
  sablona-dpia/             # Template landing page + email signup
    page.tsx
    SablonaDpiaClient.tsx   # Client component with form logic
  priklady/                 # Use case examples
  slovnik/                  # Glossary
  kontakt/                  # Contact
  api/
    subscribe/
      route.ts              # POST endpoint – adds contact to Resend topic
  layout.tsx                # Root layout (Header + Footer)
  sitemap.ts                # /sitemap.xml
  robots.ts                 # /robots.txt
components/
  Header.tsx                # Sticky header with mobile hamburger
  Footer.tsx
  CTA.tsx                   # Configurable CTA banner
  ArticleLayout.tsx         # Wrapper for article pages
  Card.tsx
  Badge.tsx
lib/
  site.ts                   # siteConfig (url, title, description) + navLinks
```

## Email Capture

- Service: **Resend** (resend.com)
- SDK version: 6.x — uses `contacts.create` with `topics` parameter (NOT deprecated `audienceId`)
- Topic name: `dpia.sk beta`
- Topic ID is stored in `RESEND_AUDIENCE_ID` env variable
- API key is stored in `RESEND_API_KEY` env variable
- Resend domain `dpia.sk` verified in eu-west-1 (Ireland)

### Environment Variables (Vercel + .env.local)
```
RESEND_API_KEY=...
RESEND_AUDIENCE_ID=a5283838-fae5-40c0-87c3-c7345e995ec8
```

**Note on Resend v6:** The SDK renamed Audiences to Segments. The UI shows "Topics" which is a separate feature. We use `topics: [{ id: topicId, subscription: 'opt_in' }]` in `contacts.create` — NOT `audienceId`.

## Domain & Deployment

- Production domain: `https://dpia.sk` — LIVE ✅
- Vercel preview: `https://dpia-sk.vercel.app`
- GitHub: `https://github.com/avantlehq/dpia-sk`
- DNS managed via Vercel nameservers (ns1.vercel-dns.com / ns2.vercel-dns.com)
- Domain registered at Websupport.sk
- DNSSEC disabled (Vercel does not support it)

## Content Language

All user-facing content is in **Slovak**. Code, variable names, and comments in English.

## SEO

- Canonical URL base: `https://dpia.sk`
- Key phrases: DPIA, posúdenie vplyvu na ochranu osobných údajov, GDPR DPIA, kedy je DPIA povinná, ako vypracovať DPIA, DPIA šablóna, DPIA Slovensko
- Each page has its own `metadata` export with `title`, `description`, and `alternates.canonical`
- sitemap.xml and robots.txt generated via Next.js App Router conventions

## Planned Next Steps

1. Google Search Console — verify domain, submit sitemap
2. Vercel Analytics — enable in dashboard (no code needed)
3. Schema.org JSON-LD markup (Article, FAQ) for rich snippets
4. FAQ sections on key article pages
5. Internal linking between articles
6. Expand /priklady to 10+ use cases

## Version Management

Follow the avantlehq org rule:
- Update `package.json` version after meaningful changes
- Commit with descriptive message including version

## Broader Ecosystem Context

- `dpia.ai` — future SaaS product for creating DPIAs (not yet built)
- `dpia.sk` — this project, Slovak local portal (launched first)
- `avantle.ai` — parent marketing site
- `dpia-avantle-ai` — existing DPIA application at dpia.avantle.ai
