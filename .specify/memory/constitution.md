<!-- Sync Impact Report
Version change: 1.2.0 -> 1.2.1
Modified principles: IV. Component Folder Structure
Added sections: none
Removed sections: none
Follow-up TODOs: Review existing component folders for alignment when they are next changed
-->

# Very OP TODO Constitution

## Core Principles

### I. Static-First Delivery

The application MUST use static, public web content and assets wherever possible. Server-side services,
databases, authentication, and runtime APIs MUST NOT be introduced unless explicitly approved through
an amended constitution or feature specification. Pages MUST remain usable without application-specific
backend infrastructure.

### II. Framework and Component Simplicity

The project MUST use Next.js, React, and TypeScript as its primary implementation stack. Reusable UI MUST
be kept in focused components; dependencies and application abstractions MUST be added only when they
solve a demonstrated need.

### III. Accessibility and Build Quality

User-facing pages MUST use semantic HTML, visible keyboard focus, and readable responsive layouts. Every
change MUST pass TypeScript compilation, ESLint, and a production build before completion.

### IV. Component Folder Structure

New reusable components MUST follow a consistent responsibility-based folder structure under
`/components/{componentName}`. Create only the files and folders relevant to that component; do not add
empty placeholders. The standard structure is:

```text
/components/{componentName}
|-- container/index.ts
|-- presentation/index.ts
|-- slice/index.ts
|-- selectors.ts
|-- presentation/styles.module.css
|-- hooks/use{hookName}.ts
|-- utils.ts
|-- constants.ts
|-- {subcomponentName}/
	|-- container/
	|-- presentation/
```

Containers MUST be composition-only and SHOULD receive no props unless necessary; any container props
interface MUST be defined in the container entry file. Components that do not require a container MUST
omit the container folder and MUST NOT use a `Presentation` suffix in their component name.
Presentations MUST be pure UI, with a TypeScript interface for their props and styles in their
presentation module. Stateful components MUST keep Redux Toolkit state, reducers, and actions in
`slice/index.ts`; selectors MUST read specific portions of state. Hooks MUST use the `use` prefix and
orchestrate logic, utilities MUST be pure and independently testable, and constants MUST hold shared
component information such as error details, analytics structures, and shared text. Subcomponents used
exclusively by a component MUST live in a path created inside the component path and follow the same responsibility
boundaries where applicable.

Components shared across multiple feature or component structures MUST live under
`/components/commons`, following the same responsibility-based organization where applicable. For
example, a reusable input control used by multiple components MUST be placed in
`/components/commons` rather than duplicated inside each component's subcomponents path.

## Static Web Constraints

- Application state MUST remain local or browser-native unless a feature specification requires otherwise.
- External assets and network requests MUST be avoided unless necessary for the requested experience.
- Generated pages MUST be deployable as static output when the selected Next.js configuration supports it.
- Secrets MUST never be embedded in client-side source or public assets.

## Development Workflow

Before implementation begins, requirements MUST be written or reviewed as a feature specification.
Application changes SHOULD be small and independently verifiable. Pull requests MUST include the checks
that were run and MUST not add backend infrastructure without explicit approval.

## Governance

This constitution supersedes undocumented project practices. Amendments require a written change,
version update, and review of affected specifications and implementation work.

- MAJOR: incompatible removal or redefinition of a principle or mandatory constraint.
- MINOR: a new principle or material expansion of existing requirements.
- PATCH: clarification or non-semantic wording correction.

Compliance MUST be checked during specification, implementation, review, and release. Runtime and build
configuration MUST remain consistent with the static-first architecture.

**Version**: 1.2.1 | **Ratified**: 2026-11-19 | **Last Amended**: 2026-11-26
