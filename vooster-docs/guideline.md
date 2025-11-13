# Code Guideline Document

## 1. Project Overview

This document outlines the coding standards and best practices for the real estate transaction price web service for young adults. The project utilizes a Next.js frontend and a Nest.js backend with PostgreSQL for data storage. It provides real estate transaction price search, price trend visualization, and personalized recommendation features. OAuth 2.0 is used for authentication and authorization.

Key architectural decisions include:

*   **Frontend**: Next.js for SSR/SSG, React Query for data management, and Tailwind CSS for UI.
*   **Backend**: Nest.js for a modular, scalable API.
*   **Database**: PostgreSQL for reliability and data integrity.
*   **Authentication**: OAuth 2.0 for secure user authentication.

## 2. Core Principles

*   **Maintainability**: Write code that is easy to understand, modify, and extend.
*   **Testability**: Design code that can be easily tested at the unit and integration levels.
*   **Performance**: Optimize code for speed and efficiency without sacrificing readability.
*   **Security**: Implement secure coding practices to protect against vulnerabilities.
*   **Readability**: Follow consistent naming conventions and formatting guidelines.

## 3. Language-Specific Guidelines

### TypeScript (Frontend & Backend)

#### File Organization and Directory Structure

*   Organize code by feature or domain.
*   Use descriptive file names (e.g., `user.service.ts`, `PropertyCard.tsx`).
*   Follow the universal file and folder structure outlined in the TRD.

#### Import/Dependency Management

*   Use absolute imports for project modules to avoid relative path issues (e.g., `import { UserService } from 'backend/src/user/user.service';`).
*   Install dependencies using `npm` or `yarn`.
*   Keep dependencies up-to-date and review updates regularly.
*   Use `devDependencies` for development-only dependencies.

#### Error Handling Patterns

*   Use `try...catch` blocks for handling potential errors.
*   Create custom error classes for specific error scenarios.
*   Log errors with sufficient context for debugging.
*   Return meaningful error messages to the frontend.

### Next.js (Frontend)

#### File Organization and Directory Structure

*   Use the `pages` directory for route-based components.
*   Create a `components` directory for reusable UI components.
*   Use a `utils` directory for utility functions and API clients.
*   Use a `types` directory for type definitions.

#### Data Fetching

*   Use `getServerSideProps` for server-side rendering (SSR) when data needs to be fetched on every request.
*   Use `getStaticProps` for static site generation (SSG) when data can be fetched at build time.
*   Use `React Query` for client-side data fetching and caching.

#### State Management

*   Prefer `React Query` for managing server state.
*   Use `useState` and `useContext` for local component state.
*   Avoid complex state management libraries unless absolutely necessary.

### Nest.js (Backend)

#### File Organization and Directory Structure

*   Organize code into modules based on features or domains.
*   Each module should have its own directory with controllers, services, and entities.

#### Dependency Injection

*   Use Nest.js's dependency injection system to manage dependencies.
*   Declare dependencies in the constructor of classes.

#### Data Validation

*   Use class-validator for data validation.
*   Create Data Transfer Objects (DTOs) to define the structure of request bodies.

#### Database Interaction

*   Use TypeORM for interacting with the PostgreSQL database.
*   Define entities to represent database tables.
*   Use repositories for data access logic.

## 4. Code Style Rules

### MUST Follow:

*   **Consistent Formatting**: Use Prettier and ESLint to enforce consistent code formatting and linting.
    *   Rationale: Improves readability and reduces stylistic debates.
    *   Implementation: Configure Prettier and ESLint with project-specific rules.
*   **Descriptive Naming**: Use clear and descriptive names for variables, functions, and classes.
    *   Rationale: Makes code easier to understand and maintain.
    *   Implementation: Follow camelCase for variables and functions, PascalCase for classes and interfaces.
*   **Code Comments**: Add comments to explain complex logic and non-obvious code.
    *   Rationale: Helps other developers understand the code's purpose and functionality.
    *   Implementation: Write concise and informative comments.
*   **Error Handling**: Implement robust error handling using `try...catch` blocks and custom error classes.
    *   Rationale: Prevents application crashes and provides informative error messages.
    *   Implementation: Handle errors gracefully and log them with sufficient context.
*   **Security Best Practices**: Follow security best practices to prevent vulnerabilities such as XSS, CSRF, and SQL injection.
    *   Rationale: Protects user data and prevents unauthorized access.
    *   Implementation: Sanitize user inputs, use parameterized queries, and implement authentication and authorization mechanisms.
*   **Use Environment Variables**: Store sensitive information, such as API keys and database passwords, in environment variables.
    *   Rationale: Prevents sensitive information from being exposed in the code.
    *   Implementation: Use `dotenv` to load environment variables from a `.env` file.

### MUST NOT Do:

*   **Global Variables**: Avoid using global variables.
    *   Rationale: Global variables can lead to naming conflicts and unexpected side effects.
    *   Implementation: Use dependency injection or pass data as function arguments instead.
*   **Magic Numbers**: Avoid using magic numbers (unexplained numeric literals) in the code.
    *   Rationale: Magic numbers make the code harder to understand and maintain.
    *   Implementation: Define constants with descriptive names instead.
*   **Nested Callbacks**: Avoid deeply nested callbacks (callback hell).
    *   Rationale: Nested callbacks make the code hard to read and debug.
    *   Implementation: Use Promises or async/await instead.
*   **Ignoring Errors**: Never ignore errors without handling them.
    *   Rationale: Ignoring errors can lead to unexpected behavior and data corruption.
    *   Implementation: Log errors and handle them appropriately.
*   **Hardcoding**: Avoid hardcoding values that are likely to change.
    *   Rationale: Hardcoded values make the code less flexible and harder to maintain.
    *   Implementation: Use configuration files or environment variables instead.
*   **Complex State Management**: Define complex state management pattern.
    *   Rationale: This can lead to performance issues and make the code harder to understand and debug.
*   **Huge, multi responsibility module in single file**: Making huge, multi responsibility module in single file.
    *   Rationale: This can lead to performance issues and make the code harder to understand and debug.

## 5. Architecture Patterns

*   **Component/Module Structure**: Organize code into reusable components and modules based on features or domains.
*   **Data Flow Patterns**:
    *   Frontend: Use React Query for managing server state and fetching data from the backend.
    *   Backend: Use Nest.js controllers to handle HTTP requests and services to implement business logic.
*   **State Management Conventions**:
    *   Frontend: Prefer React Query for server state and useState/useContext for local state.
    *   Backend: Use Nest.js's dependency injection system for managing stateful services.
*   **API Design Standards**:
    *   Use RESTful API conventions.
    *   Use JSON for request and response bodies.
    *   Implement pagination for large datasets.
    *   Use meaningful HTTP status codes.
    *   Implement API versioning.

## Example Code Snippets

```typescript
// MUST: Use descriptive variable names
const transactionPrice = 100000; // Good
const price = 100000; // Bad - Not descriptive

// Explanation: Clear variable names improve code readability.
```

```typescript
// MUST: Proper error handling with try...catch
try {
  const data = await fetchData();
  console.log(data);
} catch (error: any) {
  console.error('Error fetching data:', error.message);
  // Handle the error appropriately, e.g., display an error message to the user
}

// Explanation: Prevents unhandled exceptions and provides a way to gracefully recover.
```

```typescript
// MUST NOT: Ignoring errors
try {
  const data = await fetchData();
  console.log(data);
} catch (error) {
  // Empty catch block - BAD
}

// Explanation: Ignoring errors can lead to unexpected behavior and data corruption.  Always handle or re-throw errors.
```

```typescript
// MUST: Using environment variables
const apiKey = process.env.API_KEY;

// Explanation: Prevents sensitive information from being exposed in the code.
```

```typescript
// MUST NOT: Hardcoding values
const discount = 0.2; // Good - Defined as a constant
const discountedPrice = price * 0.8; // Bad - Magic number (0.8)

// Explanation: Hardcoded values make the code less flexible and harder to maintain.
```

```typescript
// MUST: Use absolute imports
import { UserService } from 'backend/src/user/user.service'; // Good
import { UserService } from '../../../../src/user/user.service'; // Bad - Relative import

// Explanation: Absolute imports improve code maintainability and prevent issues with relative paths.
```

```typescript
// MUST: NestJS Controller Example
import { Controller, Get, Param } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get(':id')
  async getProperty(@Param('id') id: string) {
    return this.propertyService.getProperty(id);
  }
}

// Explanation: Demonstrates proper controller structure and dependency injection.
```

```typescript
// MUST: React Query Example
import { useQuery } from 'react-query';
import { fetchProperties } from '../utils/api';

function PropertyList() {
  const { data, isLoading, error } = useQuery('properties', fetchProperties);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(property => (
        <li key={property.id}>{property.name}</li>
      ))}
    </ul>
  );
}

// Explanation: Demonstrates how to use React Query for data fetching and caching.
```

```typescript
// MUST: Class Validator DTO Example (NestJS)
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  description?: string;
}

// Explanation: Demonstrates how to use class-validator to validate request bodies.
```
