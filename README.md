# Parvin Rajamurthi — Portfolio

A dark, moody personal portfolio with an AI assistant, glitch button effects,
and a cursor-controlled skills carousel.

Built with **Next.js 14**, **TypeScript**, and the **Anthropic SDK**.

---

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your API key
```bash
cp .env.example .env.local
```
Open `.env.local` and replace `your_api_key_here` with your real Anthropic API key.
Get one at https://console.anthropic.com

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

---

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → import the repo
3. In Vercel project settings → Environment Variables → add:
   - `ANTHROPIC_API_KEY` = your key
4. Deploy — done

---

## Updating your info

Everything personal lives in **`lib/info.ts`**:

| What to change          | Where              |
|-------------------------|--------------------|
| Name, email, links      | `info` object      |
| AI assistant context    | `info.aiContext`   |
| Skills list             | `skills` array     |
| Projects                | `projects` array   |
| AI chat chip questions  | `aiChips` array    |

---

## Project structure

```
parvin-portfolio/
├── app/
│   ├── api/chat/route.ts   ← AI endpoint (API key stays here, server-only)
│   ├── globals.css         ← design tokens + glitch animations
│   ├── layout.tsx          ← root layout + metadata
│   └── page.tsx            ← assembles all sections
├── components/
│   ├── Nav.tsx / .css
│   ├── AiChat.tsx / .css   ← AI assistant widget
│   ├── Hero.tsx / .css
│   ├── Skills.tsx / .css   ← auto-scrolling carousel
│   ├── Projects.tsx / .css
│   ├── Contact.tsx / .css
│   ├── Footer.tsx / .css
│   └── GlitchButton.tsx / .css  ← reusable glitch button
├── lib/
│   └── info.ts             ← all your personal info in one place
├── .env.example
└── README.md
```
