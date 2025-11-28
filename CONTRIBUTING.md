# Contributing to Rookoo React Native Widget

Thank you for your interest in contributing to the Rookoo React Native Widget! We welcome contributions from the community.

## Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/rookoo-react-native-widget.git
   cd rookoo-react-native-widget
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Example project:**
   ```bash
   cd example
   npm install
   cd ios && pod install && cd ..
   ```

## Development Workflow

### Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the `src/` directory

3. **Test your changes** using the Example project:
   ```bash
   cd example
   npx react-native run-ios  # or run-android
   ```

4. **Run linting:**
   ```bash
   npm run lint
   # Fix any issues automatically:
   npm run lint:fix
   ```

### Testing

- Test your changes on both iOS and Android platforms
- Ensure the Example project works correctly
- Test with different React Native versions if possible
- Verify TypeScript definitions are correct

### Code Style

- Follow the existing code style
- Use ESLint and Prettier (configured in the project)
- Write clear, descriptive commit messages
- Add comments for complex logic

## Submitting Changes

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request:**
   - Use a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Explain what you tested

## Commit Message Format

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## Release Process

Releases are automated through GitHub Actions:

1. **Update version:** Use the bump scripts
   ```bash
   npm run version:patch  # for bug fixes
   npm run version:minor  # for new features
   npm run version:major  # for breaking changes
   ```

2. **The script will:**
   - Run linting
   - Bump the version
   - Update Example dependencies
   - Create a git tag
   - Push changes

3. **GitHub Actions will:**
   - Run CI checks
   - Publish to NPM
   - Create a GitHub release

## Project Structure

```
├── src/                    # Main widget source code
│   ├── App.js             # Main widget component
│   ├── WebView.js         # WebView component
│   ├── constants.js       # Constants and configuration
│   ├── utils.js          # Utility functions
│   └── style.js          # Styles
├── Example/               # Example React Native app
├── scripts/              # Build and release scripts
├── .github/              # GitHub workflows and templates
├── index.js              # Main entry point
├── index.d.ts           # TypeScript definitions
└── package.json         # Package configuration
```

## Getting Help

- Check existing [issues](https://github.com/rookoo/rookoo-react-native-widget/issues)
- Create a new issue if you need help
- Join our [Discord](https://discord.gg/rookoo) for community support

## Code of Conduct

This project follows a Code of Conduct. By participating, you agree to uphold this code. Please report unacceptable behavior to the project maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
