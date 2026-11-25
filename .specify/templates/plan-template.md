# Implementation Plan: UI Foundations

**Branch**: `001-ui-foundations` | **Date**: 2026-11-22 | **Spec**: [Feature specification](../../specs/001-ui-foundations/spec.md)

**Input**: Feature specification from `/specs/001-ui-foundations/spec.md`

## Summary

Create the static Next.js UI foundation for the supplied task-list screen while keeping visual rules, component responsibilities, interaction states, assets, and usage guidance independently discoverable. Implementation follows the responsibility-separated structure established by `components/toDo/`: container composition, presentation, interaction adapters, state logic, and selectors are separated. This feature remains presentational, so persistence and task-management workflows are excluded.

## Technical Context

**Language/Version**: TypeScript 5, with React 19 and Next.js 16

**Primary Dependencies**: Next.js App Router, React 19, CSS modules, global CSS custom properties, ESLint 9

**Storage**: N/A — static presentational content only

**Testing**: TypeScript compiler, ESLint, production build, and manual viewport and keyboard reviews at 320 px, 768 px, and 1440 px

**Target Platform**: Modern desktop and mobile web browsers

**Project Type**: Single-project web application

**Performance Goals**: Static rendering, no runtime network dependencies, and no unnecessary client state or JavaScript bundles

**Constraints**: WCAG AA text and control contrast; readable layouts from 320–1440 px; no backend, authentication, persistence, or workflow behavior; no temporary external asset URLs

**Scale/Scope**: One representative foundation page, six visible UI responsibilities, and one shared visual-rule set

## Constitution Check

_GATE: Re-check after Phase 1 design._

- **Static-First Architecture**: Pass. The page and components use static or browser-native behavior, with no server, database, API, authentication, or secrets.
- **Framework and Component Simplicity**: Pass. Next.js, React, and TypeScript remain the primary stack, with focused components and no unnecessary framework or state abstraction.
- **Accessibility and Build Quality**: Pass, subject to validation. Use semantic headings and native controls, visible keyboard focus, text wrapping, and responsive reflow.
- **Development Quality Gates**: Pass, subject to running `npx tsc --noEmit`, `npm run lint`, and `npm run build`.

## Project Structure

### Documentation (this feature)

```text
specs/001-ui-foundations/
├── plan.md              # This implementation plan
├── research.md          # Resolved implementation decisions
├── data-model.md        # Foundation entities and presentational types
├── quickstart.md        # Run and validation guide
├── contracts/           # No external service contracts for this feature
└── tasks.md             # Ordered implementation tasks
```

### Source Code (repository root)

```text
app/
├── globals.css                 # Shared reset and CSS custom properties
├── layout.tsx                  # Application shell
├── page.tsx                    # Representative foundation composition
└── page.module.css             # Page layout and responsive styles

components/
├── op-todo/
│   ├── page-heading.tsx        # Page-title responsibility
│   ├── task-category.tsx       # Category heading and task-group responsibility
│   ├── task-row.tsx            # Task row and checkbox responsibility
│   └── task-entry.tsx          # Entry field and add-action responsibility
└── toDo/
    ├── action-creators/        # Future interaction-to-state adapters
    ├── container/              # Future composition and state bridge
    ├── presentation/           # Future presentational components and styles
    ├── reducer/                # Reserved future task-state logic
    └── selectors.js            # Reserved future derived-state interface
```

**Structure Decision**: Keep app-level composition and shared visual rules in `app/`, keep UI foundations in focused `components/op-todo/` files, and preserve `components/toDo/` as the repository reference for future responsibility separation. State folders are reserved for later behavior and must not duplicate presentational responsibilities in this feature.

## Responsibility Mapping

| Responsibility                                            | Owner                                    | States                                       | Usage guidance                                      |
| --------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| Canvas, typography, color, spacing, borders, and surfaces | `app/globals.css`, `app/page.module.css` | Default and responsive                       | Reuse CSS custom properties and module classes      |
| Page title                                                | `components/op-todo/page-heading.tsx`    | Default, wrapping                            | Render one semantic primary heading                 |
| Category label and task group                             | `components/op-todo/task-category.tsx`   | Empty, one-item, many-item, narrow           | Own the category heading and task-list relationship |
| Task row and completion control                           | `components/op-todo/task-row.tsx`        | Default, hover, focus, checked/completed     | Keep label, checkbox, and task text together        |
| Task-entry field and add action                           | `components/op-todo/task-entry.tsx`      | Default, placeholder, hover, focus, disabled | Keep field and action as one entry control unit     |

## Complexity Tracking

No constitution violations require justification. Focused component files and app-level styling are simpler than introducing application state or external UI dependencies.
