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
- No backend API routes
- No admin panel
- No CMS

## Tech Stack

- Next.js 16, App Router, TypeScript
- Tailwind CSS v3
- All pages are static (pre-rendered)
- Vercel deployment

## Project Structure

```
app/                        # Next.js App Router pages
  page.tsx                  # Homepage
  co-je-dpia/               # What is DPIA
  kedy-je-dpia-povinne/     # When is DPIA mandatory
  ako-vypracovat-dpia/      # How to create DPIA
  sablona-dpia/             # Template landing page + email signup
  priklady/                 # Use case examples
  slovnik/                  # Glossary
  kontakt/                  # Contact
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

## Domain & Deployment

- Production domain: `https://dpia.sk`
- Vercel preview: `https://dpia-sk.vercel.app`
- GitHub: `https://github.com/avantlehq/dpia-sk`
- DNS managed via Vercel nameservers (ns1.vercel-dns.com / ns2.vercel-dns.com)
- Domain registered at Websupport.sk

## Content Language

All user-facing content is in **Slovak**. Code, variable names, and comments in English.

## SEO

- Canonical URL base: `https://dpia.sk`
- Key phrases: DPIA, posúdenie vplyvu na ochranu osobných údajov, GDPR DPIA, kedy je DPIA povinná, ako vypracovať DPIA, DPIA šablóna, DPIA Slovensko
- Each page has its own `metadata` export with `title`, `description`, and `alternates.canonical`
- sitemap.xml and robots.txt generated via Next.js App Router conventions

## Version Management

Follow the avantlehq org rule:
- Update `package.json` version after meaningful changes
- Commit with descriptive message including version

## Broader Ecosystem Context

- `dpia.ai` — future SaaS product for creating DPIAs (not yet built)
- `dpia.sk` — this project, Slovak local portal (launched first)
- `avantle.ai` — parent marketing site
- `dpia-avantle-ai` — existing DPIA application at dpia.avantle.ai
