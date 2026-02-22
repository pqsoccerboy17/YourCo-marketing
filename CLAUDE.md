# Mycel Website

## Project Overview
React + Vite + Tailwind consulting website for Mycel.
PE-backed company AI adoption consulting - helping companies turn AI tool sprawl into investor-ready adoption stories.

## About the Developer
- **Non-developer user** - I rely on Claude Code to write, test, and manage code
- Always explain what you're doing in plain English before executing
- Prefer small, incremental changes that can be easily reviewed
- Ask for confirmation before any destructive or irreversible actions

## Tech Stack
- **Framework**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **Fonts**: System font stack (no external fonts)
- **Deployment**: Vercel/Netlify (planned)

## Key Commands
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## File Structure
```
src/
├── App.jsx           # Main app component (single-page)
├── index.css         # Global styles + Mycel design tokens
├── main.jsx          # Entry point
└── assets/           # Static assets
public/
└── favicon.svg       # Mycel branching node favicon
```

## Development Workflow
1. **Understand** - Explain what needs to be done
2. **Plan** - Show approach before coding
3. **Implement** - Make small, focused changes
4. **Test** - Run dev server, check responsive + dark mode
5. **Commit** - Use clear commit messages with Co-Authored-By
6. **PR** - Create pull request with summary

## Code Style
- React functional components with hooks
- Tailwind utility classes (prefer over custom CSS)
- CSS variables for theming (--color-accent-primary, --color-bg-primary, etc.)
- Keep components small and focused
- Use semantic HTML elements

## Safety Rules
- **Never** commit .env files or API keys
- **Always** test responsive (mobile/tablet/desktop) before committing
- **Always** test dark mode before committing
- **Ask** before adding new dependencies

## Brand System
- **Primary Accent**: Amber #d97706 (hover: #b45309)
- **Backgrounds**: Stone 50 #fafaf9, Card #ffffff
- **Text**: Stone 900 #1c1917, Stone 600 #57534e
- **Borders**: Stone 200 #e7e5e4
- **Font**: System font stack (-apple-system, BlinkMacSystemFont, etc.)
- **Style**: Warm minimalism with mycelial undertones
- **Dark Mode**: `data-theme="dark"` toggle (warm charcoal #1c1c1e, cream text #F5E6D3)

## Page Sections
- Hero (AI GTM Strategy headline)
- Problem (The Adoption Paradox)
- Services (AI GTM Assessment with 3 service cards)
- Case Study (Global Software Company results)
- Contact (Discovery call form)

## Target Audience
- PE/VC-backed companies ($20-200M ARR)
- GTM teams of 20-200 people
- COO or CRO as primary buyer
- Companies with 8+ AI tools and scattered adoption
- Board meeting or investor update in 2-3 months

## Key Messaging
- **Headline**: "Your board wants an AI story. Your team has 12 tools and no adoption metrics."
- **Problem**: The Adoption Paradox (84% using AI, only 60% satisfied)
- **Solution**: 4-6 week AI GTM Assessment
- **Pricing**: $30-60K assessment, $15-25K focused audit, $5-10K/mo advisory

## Ralph Wiggum Safe Tasks
Good for autonomous runs:
- Styling updates (colors, spacing, typography)
- Content updates (copy changes)
- Component refactoring
- Responsive adjustments
- Accessibility improvements

Needs human oversight:
- Adding new pages/routes
- Form integrations (Tally, Cal.com)
- Deployment configuration
- Adding new dependencies
- API integrations

## Related Resources
- **Notion Hub**: Business Hub, Marketing Hub (see handoff doc)
- **Handoff Doc**: CLAUDE_CODE_HANDOFF.md
