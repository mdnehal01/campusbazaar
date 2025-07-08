# Contributing to Campus Bazaar

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Campus Bazaar. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots if applicable**
- **Include your environment details** (OS, browser, Node.js version)

### Suggesting Enhancements ✨

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain the behavior you expected**
- **Explain why this enhancement would be useful**

### Pull Requests 🔄

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the TypeScript and React style guides
- Include thoughtfully-worded, well-structured tests
- Document new code based on the Documentation Style Guide
- End all files with a newline

## Development Process

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
git clone https://github.com/your-username/campusbazaar.git
cd campusbazaar
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your environment variables

# Start development server
npm run dev
```

### 4. Make Your Changes

- Write clear, readable code
- Add tests for new functionality
- Update documentation as needed
- Ensure your code follows our style guidelines

### 5. Test Your Changes

```bash
# Run linting
npm run lint

# Build the project
npm run build

# Test the production build
npm start
```

### 6. Commit and Push

```bash
git add .
git commit -m "feat: add new sustainability metrics dashboard"
git push origin feature/your-feature-name
```

### 7. Create Pull Request

- Go to the original repository
- Click "New Pull Request"
- Fill out the PR template
- Wait for review

## Style Guidelines

### TypeScript Style Guide

- Use TypeScript for all new code
- Define proper interfaces and types
- Use meaningful variable and function names
- Follow React best practices

```typescript
// ✅ Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
  college: string;
}

const getUserProfile = async (userId: string): Promise<UserProfile> => {
  // Implementation
};

// ❌ Bad
const getStuff = async (id: any) => {
  // Implementation
};
```

### React Component Guidelines

- Use functional components with hooks
- Implement proper error boundaries
- Use proper prop typing
- Follow naming conventions

```tsx
// ✅ Good
interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* Component implementation */}
    </div>
  );
};

export default ProductCard;
```

### CSS/Tailwind Guidelines

- Use Tailwind CSS classes
- Follow mobile-first approach
- Use semantic class names for custom CSS
- Keep components responsive

```tsx
// ✅ Good
<div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-md">
  <div className="w-full md:w-1/3">
    {/* Content */}
  </div>
</div>
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add user authentication with Supabase
fix: resolve cart total calculation error
docs: update API documentation for product endpoints
style: format code according to prettier rules
refactor: extract cart logic into custom hook
perf: optimize image loading with lazy loading
test: add unit tests for product validation
chore: update dependencies to latest versions
```

## Code Comments Convention

We use a specific commenting system:

- `TODO:` - Features that need to be implemented
- `KNOW:` - Code explanations and documentation  
- `DONE:` - Completed functionality (previously TODO)

```typescript
// TODO: Implement advanced search filters
// KNOW: This function calculates sustainability score based on product lifecycle
// DONE: Added user authentication and session management
```

## Project Structure Guidelines

When adding new files, follow our established structure:

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components
│   └── [feature]/         # Feature-specific components
├── actions/               # Server actions
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── providers/             # Context providers
├── types/                 # TypeScript type definitions
└── data/                  # Static data and constants
```

## Testing Guidelines

- Write unit tests for utility functions
- Write integration tests for complex components
- Test error scenarios
- Maintain good test coverage

```typescript
// Example test structure
describe('ProductCard Component', () => {
  it('should render product information correctly', () => {
    // Test implementation
  });

  it('should handle add to cart action', () => {
    // Test implementation
  });

  it('should display error state when product is unavailable', () => {
    // Test implementation
  });
});
```

## Documentation Guidelines

- Update README.md for significant changes
- Add JSDoc comments for complex functions
- Document API endpoints
- Include examples in documentation

## Getting Help

- Check existing issues and discussions
- Join our community Discord (if available)
- Reach out to maintainers
- Read the documentation thoroughly

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special mentions in project updates

Thank you for contributing to Campus Bazaar! Together, we're building a more sustainable future for college students. 🌱

---

**Happy Contributing!** 🚀
