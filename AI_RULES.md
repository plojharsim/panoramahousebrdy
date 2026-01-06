# AI Development Rules for Panorama House Brdy

## Tech Stack Overview

- **Framework**: React with TypeScript
- **Routing**: React Router DOM for client-side navigation
- **UI Components**: shadcn/ui library with Radix UI primitives
- **Styling**: Tailwind CSS with custom nature-inspired color palette
- **State Management**: React Query for server state and data fetching
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod for validation
- **Animations**: Tailwind CSS animations and custom keyframes
- **Toasts/Notifications**: Sonner for user notifications
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Library Usage Rules

### UI Components
- **ALWAYS** use shadcn/ui components as the primary UI library
- **DO NOT** modify shadcn/ui source files directly
- **CREATE** new wrapper components when customization is needed
- **USE** Radix UI primitives when shadcn/ui doesn't provide a needed component

### Styling
- **USE** Tailwind CSS classes for all styling
- **FOLLOW** the existing nature-inspired color palette (forest, sunrise, mountain, etc.)
- **EXTEND** Tailwind theme in tailwind.config.ts for new colors/breakpoints
- **AVOID** inline styles - use Tailwind classes instead

### State Management
- **USE** React Query for all server state and data fetching
- **USE** React context for simple client-side state
- **AVOID** complex state management libraries unless absolutely necessary

### Routing
- **KEEP** all routes in src/App.tsx
- **USE** React Router DOM for navigation
- **FOLLOW** the existing route structure pattern

### Forms
- **USE** React Hook Form for all form handling
- **USE** Zod for form validation schemas
- **FOLLOW** the existing form component patterns

### Icons
- **USE** Lucide React for all icons
- **FOLLOW** the existing icon naming and usage patterns
- **AVOID** mixing different icon libraries

### Animations
- **USE** Tailwind CSS animations for simple transitions
- **CREATE** custom keyframes in index.css for complex animations
- **FOLLOW** the existing animation naming conventions

### Notifications
- **USE** Sonner for toast notifications
- **FOLLOW** the existing toast patterns in the codebase

### File Structure
- **KEEP** pages in src/pages/
- **KEEP** components in src/components/
- **KEEP** UI components in src/components/ui/
- **KEEP** layout components in src/components/layout/
- **KEEP** page-specific components in src/components/[page-name]/

### TypeScript
- **USE** TypeScript for all new components and files
- **FOLLOW** the existing type patterns and interfaces
- **AVOID** using `any` type - use proper typing

### Best Practices
- **FOLLOW** the existing code style and patterns
- **KEEP** components small and focused (under 100 lines)
- **USE** meaningful component and variable names
- **WRITE** responsive components by default
- **DOCUMENT** complex components with JSDoc comments