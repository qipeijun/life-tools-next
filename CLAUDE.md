# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based web application called "生活工具集" (Life Tools) that provides investment analysis tools and lifestyle utilities. The application is in Chinese and focuses on financial calculations and daily life helpers.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (Next.js with Turbopack)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Package Management
The project uses yarn.lock, so use `yarn` for package management instead of npm.

## Architecture & Structure

### Next.js App Router
- Uses Next.js 16 with App Router (`src/app/` directory)
- Each tool has its own page route (e.g., `/kdj-rsi`, `/t-day-calculator`)
- Root layout at `src/app/layout.js` includes global styling and theme support

### Key Directories
- `src/app/` - Next.js pages and app structure
- `src/components/ui/` - Reusable UI components (Button, Card, Input, ThemeToggle)
- `src/components/layout/` - Layout components (ToolCard)
- `src/lib/` - Utility functions and business logic
  - `calculations.js` - Core financial calculation algorithms (KDJ, RSI, etc.)
  - `utils.js` - General utilities (includes `cn()` for Tailwind class merging)
  - `validations.js` - Input validation functions
- `src/hooks/` - Custom React hooks (useLocalStorage for persistence)

### UI Framework & Styling
- **Tailwind CSS** with extensive custom configuration
- **iOS-inspired design system** with custom animations and spacing
- **Dark mode support** via `darkMode: 'class'`
- **Responsive design** with custom breakpoints (mobile, tablet, laptop, desktop)
- **Lucide React** icons throughout the application

### Core Features & Tools
1. **KDJ + RSI Analysis** (`/kdj-rsi`) - Technical analysis for trading
2. **KDJ + RSI Pro** (`/kdj-rsi-pro`) - Enhanced version with charts
3. **T-Day Calculator** (`/t-day-calculator`) - Trading cost calculations
4. **Grid Strategy** (`/grid-strategy`) - ETH grid trading strategy analysis
5. **Soy Milk Assistant** (`/soy-milk`) - Lifestyle timing tool

### Key Technical Details

#### Configuration
- **ESLint**: Extends `next/core-web-vitals` with custom rules
- **Next.js Config**: Includes image domains, Turbopack with `@` alias, and Lucide React optimization
- **Tailwind**: Custom animations, safe area insets, mobile-first responsive design

#### Business Logic
- Financial calculations are centralized in `src/lib/calculations.js`
- KDJ analysis uses customizable thresholds (default: overbought 80, oversold 20)
- Real-time calculations with confidence scoring
- LocalStorage persistence for user preferences and data

#### Component Patterns
- Uses `useLocalStorage` hook for data persistence
- Mobile-responsive animations (different timing for mobile vs desktop)
- Consistent gradient styling across tool cards
- Theme toggle functionality integrated globally

## Development Notes

### Code Style
- Chinese content throughout (UI text, comments, metadata)
- Functional components with hooks
- Consistent use of Tailwind classes via `cn()` utility
- Client-side rendering indicated by `'use client'` directive where needed

### Performance Considerations
- Optimized Lucide React imports in Next.js config
- Conditional rendering based on mounted state for SSR compatibility
- Background blur effects and animations use CSS transforms for performance