# [YourCo] Consulting Website

## Project Overview
React + Vite + Tailwind consulting website for [YourCo] Consulting.
PE-backed company AI adoption consulting - helping companies turn AI tool sprawl into investor-ready adoption stories.

## About the Developer
- **Non-developer user** - I rely on Claude Code to write, test, and manage code
- Always explain what you're doing in plain English before executing
- Prefer small, incremental changes that can be easily reviewed
- Ask for confirmation before any destructive or irreversible actions

## Tech Stack
- **Framework**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **Fonts**: DM Sans (Google Fonts)
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
├── App.jsx           # Main app component (single-page for now)
├── index.css         # Global styles + CSS variables + dark mode
├── main.jsx          # Entry point
└── assets/           # Static assets (logos, images)
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
- CSS variables for theming (--terracotta, --bg-page, etc.)
- Keep components small and focused
- Use semantic HTML elements

## Safety Rules
- **Never** commit .env files or API keys
- **Always** test responsive (mobile/tablet/desktop) before committing
- **Always** test dark mode before committing
- **Ask** before adding new dependencies

## Brand System
- **Primary Accent**: Terracotta #C4765B (hover: #A86249)
- **Secondary**: Sage #8B9E8B, Dusty Blue #7C8FA6
- **Backgrounds**: Warm White #FAF9F7, Surface #FFFFFF
- **Text**: Warm Charcoal #2D2A26, Stone #6B6560
- **Font**: DM Sans (400, 500, 600, 700)
- **Style**: Warm Minimalism (Scandinavian + Australian + Anthropic)
- **Dark Mode**: System preference based via `prefers-color-scheme`

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
- Adding new sections to homepage
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
- **Brand Preview**: brand-preview.html (working light/dark demo)
- **Handoff Doc**: CLAUDE_CODE_HANDOFF.md
