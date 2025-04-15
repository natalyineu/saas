# React Component Best Practices

## Component Organization

### 1. Server vs. Client Components

In Next.js 13+, components are server components by default. Only add `'use client'` directive when necessary:

```tsx
// Only add this when component needs:
// - Interactivity (event handlers)
// - Browser APIs
// - React hooks (useState, useEffect, etc.)
'use client'

import { useState } from 'react';

export default function InteractiveComponent() {
  const [state, setState] = useState(initialState);
  // ...
}
```

### 2. Component File Structure

Organize complex components with this structure:

```
ComponentName/
├── index.tsx       # Main component export
├── SubComponent.tsx # If needed
└── ComponentName.module.css # If needed (for specific styling)
```

## TypeScript Best Practices

### 1. Props Type Definitions

Always define prop types at the top of the component file:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  // Component implementation
}
```

### 2. Type Re-usability

For shared types, export from a central location:

```tsx
// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// Then import in components:
import type { User } from '@/types';
```

## Performance Optimization

### 1. Component Memoization

For expensive renders or frequently re-rendered components:

```tsx
'use client'
import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data }: Props) {
  // Component logic
});

export default ExpensiveComponent;
```

### 2. Code Splitting

Use dynamic imports for larger components:

```tsx
import dynamic from 'next/dynamic';

// Only load when needed
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## State Management

### 1. Local State

Use React's built-in state management for component-specific state:

```tsx
'use client'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 2. Shared State

For state shared between components, consider:

- Context API for moderate state sharing
- State management libraries only when truly needed

## Accessibility (a11y)

### 1. Semantic HTML

Always use semantic HTML elements:

```tsx
// DO:
<button onClick={handleClick}>Click me</button>

// DON'T:
<div onClick={handleClick} role="button">Click me</div>
```

### 2. ARIA Attributes

Include appropriate ARIA attributes when needed:

```tsx
<button 
  aria-label="Close dialog" 
  aria-expanded={isExpanded}
  onClick={closeDialog}
>
  <span className="sr-only">Close</span>
  <XIcon />
</button>
```

## Component Responsibilities

### 1. Single Responsibility

Components should do one thing well:

```tsx
// Separate components by responsibility
function UserProfile({ user }) {
  return (
    <div>
      <UserAvatar user={user} />
      <UserDetails user={user} />
      <UserActions user={user} />
    </div>
  );
}
```

### 2. Container vs. Presentation

Separate data fetching and UI rendering:

```tsx
// Container component (handles data)
'use client'
function UserListContainer() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);
  
  return <UserList users={users} />;
}

// Presentation component (just renders)
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
```

## Testing Recommendations

1. Use React Testing Library for component tests
2. Test user interactions not implementation details
3. Mock external dependencies when testing components 