# Overview

A modern restaurant website for "Кафе Лимар" (Cafe Limar) located in New Athos, Georgia. This full-stack web application showcases the restaurant's menu, atmosphere, and contact information with a focus on Georgian hospitality and cuisine. The application features a modern React frontend with a complete component library, Express backend, and PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server with hot module replacement
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API caching
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **Shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Font integration** with Google Fonts (Inter and Playfair Display) for typography

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **ESM modules** throughout the application for modern JavaScript standards
- **Middleware-based** request/response handling with logging and error management
- **In-memory storage** implementation with interface-based design for easy database migration
- **Development/production** environment separation with different build processes

## Data Storage Solutions
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **Neon Database** serverless PostgreSQL integration (@neondatabase/serverless)
- **Schema-first** approach with Zod validation for data integrity
- **Migration support** through Drizzle Kit for database version control
- **In-memory fallback** storage implementation for development/testing

## Authentication and Authorization
- **Session-based** authentication setup with connect-pg-simple for PostgreSQL session storage
- **User management** schema with username/password fields
- **Prepared infrastructure** for extending authentication features

## External Service Integrations
- **Yandex Maps API** for location display and interactive mapping
- **WhatsApp integration** for table reservations and customer communication
- **Font Awesome** icons for UI elements
- **Unsplash/Pixabay** image integration for gallery and visual content

## Development and Build Process
- **TypeScript** strict mode configuration across client, server, and shared code
- **ESBuild** for production server bundling with external packages
- **Path aliases** for clean imports (@/, @shared/, @assets/)
- **Replit-specific** development tools and error overlays
- **Environment-based** configuration for development vs production

## UI/UX Design Patterns
- **Component-driven** architecture with reusable UI components
- **Accessibility-first** design using Radix UI primitives
- **Responsive design** with mobile-first Tailwind CSS approach
- **Theme system** with CSS custom properties for consistent styling
- **Smooth scrolling** navigation and interactive elements

# External Dependencies

## Core Framework Dependencies
- **React ecosystem**: react, react-dom, @vitejs/plugin-react
- **TanStack Query**: @tanstack/react-query for server state management
- **Wouter**: Lightweight routing library
- **Express.js**: Backend web framework

## Database and ORM
- **Drizzle ORM**: drizzle-orm, drizzle-kit for database operations
- **Drizzle Zod**: drizzle-zod for schema validation
- **Neon Database**: @neondatabase/serverless for PostgreSQL connection
- **Session Storage**: connect-pg-simple for PostgreSQL session management

## UI Component Library
- **Radix UI**: Complete suite of accessible component primitives (@radix-ui/react-*)
- **Shadcn/ui**: Pre-built components using Radix UI and Tailwind CSS
- **Class Variance Authority**: cva for component variant management
- **Tailwind CSS**: Utility-first CSS framework with PostCSS

## Form Handling and Validation
- **React Hook Form**: Form state management
- **Hookform Resolvers**: @hookform/resolvers for validation integration
- **Zod**: Schema validation library

## Styling and Icons
- **Tailwind CSS**: tailwindcss, autoprefixer for styling
- **Font Awesome**: External CDN integration for icons
- **Google Fonts**: External integration for typography
- **CLSX/Tailwind Merge**: Utility libraries for conditional classes

## External APIs and Services
- **Yandex Maps API**: Geolocation and mapping services
- **WhatsApp Business API**: Customer communication integration
- **Unsplash/Pixabay APIs**: Image content for gallery sections

## Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool with development server and HMR
- **ESBuild**: Production bundling for server code
- **Replit integrations**: Development environment specific tools