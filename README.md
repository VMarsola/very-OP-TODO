This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## UI Foundation

The `001-ui-foundations` implementation provides a presentational task-list foundation based on the supplied Figma reference.

- Use `app/globals.css` for shared visual tokens and base styles.
- Use `app/page.module.css` for page layout and responsive composition.
- Use `components/op-todo/page-heading.tsx` for the page title responsibility.
- Use `components/op-todo/task-category.tsx` for category headings and task groups.
- Use `components/op-todo/task-row.tsx` for task rows and completion controls.
- Use `components/op-todo/task-entry.tsx` for the task-entry field and add action.

The reference uses text and native-looking controls only, so there are no standalone imagery or external runtime asset dependencies.

## Component Folder Structure

Components should be created following this folder structure:
Component Folder Structure & Responsibilities

General Structure

```
/components/{componentName}
|-- container/index.ts                          # Composition only. Usually does not receive props, but if necessary, define its interface inside this file.
|-- presentation/index.ts                       # Pure UI. Uses TypeScript to define an interface for the props it receives.
|-- slice/index.ts                              # State, reducers, and actions using Redux Toolkit.
|-- selectors.ts                                # Functions for reading specific portions of the state.
|-- presentation/styles.module.css              # Styling for the UI.
|-- hooks/use{hookName}.ts                      # Logic orchestrator. Always use "use" as a prefix, followed by a descriptive name identifying its responsibility.
|-- utils.ts                                    # Pure, independently testable helper functions.
|-- constants.ts                                # API error information, GA structures, shared texts, and other shared constant information.
|-- subcomponents/                              # Simpler components used exclusively within this component's scope.
    |-- {subcomponentName}/
        |-- container/
        |-- presentation/
        |-- # Could use any other file or folder listed below if necessary.
```

Example

```
/components/to-do
|-- container/index.ts                          # Composition only. Usually does not receive props, but if necessary, define its interface inside this file.
|-- presentation/index.ts                       # Pure UI. Uses TypeScript to define an interface for the props it receives.
|-- slice/index.ts                              # State, reducers, and actions using Redux Toolkit.
|-- selectors.ts                                # Functions for reading specific portions of the state.
|-- presentation/styles.module.css              # Styling for the UI.
|-- hooks/useIsUserAllowed.ts                   # Logic orchestrator. Always use "use" as a prefix, followed by a descriptive name identifying its responsibility.
|-- utils.ts                                    # Pure, independently testable helper functions.
|-- constants.ts                                # API error information, GA structures, shared texts, and other shared constant information.
|-- checkList/                                  # Simpler component used exclusively within the scope of the To-Do component.
    |-- container/
    |-- presentation/
    |-- # Could use any other file or folder listed below if necessary.
```
