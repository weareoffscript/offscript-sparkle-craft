

# Off-Script Workshop — Build Plan

## Overview
A single-page workshop experience with sidebar navigation, 5 sections (Module 00–03 + 30-Day Plan), warm earthy design, and interactive reflection prompts.

## Design System
- **Dark olive/green sidebar** with warm cream/tan content area
- **Serif headings** (e.g., Playfair Display) with italic accent text in a warm orange/copper color
- **Body text** in a clean sans-serif, dark brown/charcoal
- **Accent color**: warm orange (#D4845A-ish) for highlights, bullet dots, and italic headings
- **Blockquotes** with left gold/amber border on cream background

## Layout
- **Fixed left sidebar** (~180px): "Off-Script" branding + "REVENUE LEAK WORKSHOP" subtitle, navigation links with icons (Welcome, Money Leaks, Time & Complexity, System & Asset Leaks, Your 30-Day Plan), active state highlighted
- **Scrollable main content area**: each module rendered as a long-scroll page, clicking sidebar links scrolls to that section

## Sections to Build

### Module 00 — Welcome
- Hero with "MODULE 00 — START HERE" label, large heading with italic styling
- Subtitle paragraph, time badge (⏱ 5 min) + workbook badge
- Blockquote callout ("No videos. Deliberately...")
- "What this is" + "How this works" sections with styled bullet list
- Reflection prompt with text input + "Send →" button
- Workbook checklist section

### Module 01 — Money Leaks
- Structured content: 3 types of money leaks with sub-bullets
- Example callout box
- 4 rules with bold labels
- Reflection prompt + workbook section

### Module 02 — Time & Complexity Leaks
- 3-bucket breakdown, waste examples
- Highlight boxes for "time should be here" vs "if it's here instead"
- Reflection prompt + workbook section

### Module 03 — System & Asset Leaks
- System gaps and asset waste lists
- Highlight boxes for key rules
- Quick check callout
- Reflection prompt + workbook section

### Your 30-Day Plan
- 4-week plan structure (Week 1–4)
- Workbook checklist
- Optional next step CTA

## Interactivity
- Sidebar navigation highlights active section based on scroll position
- Smooth scroll to sections on sidebar click
- Reflection text inputs with styled "Send →" buttons (toast confirmation on submit)
- Section dividers between modules with "Next module →" links

## Components
1. **WorkshopLayout** — sidebar + main content wrapper
2. **SidebarNav** — navigation with scroll-spy active state
3. **ModuleHeader** — module label, title, subtitle, badges
4. **ReflectionPrompt** — styled text input with submit
5. **WorkbookSection** — styled checklist
6. **ContentSection** — label + heading + body for sub-sections
7. **CalloutBox** — blockquote/highlight styling

