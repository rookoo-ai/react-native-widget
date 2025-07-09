# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Migrated from Chatwoot to Rookoo branding
- Updated widget endpoint from `/widget` to `/v2widget`
- Updated package name to `@rookoo/react-native-widget`
- Updated base URL to `app.rookoo.ai`

### Added
- GitHub Actions workflow for automated NPM publishing
- Comprehensive contributing guidelines
- Code of conduct
- Issue and PR templates
- Version bump scripts
- CI workflow for linting and testing

### Improved
- Enhanced TypeScript definitions
- Better documentation and examples
- Improved README with clearer setup instructions

## [0.0.21] - 2025-07-09

### Initial Release
- React Native widget for Rookoo chat integration
- WebView-based chat interface
- Support for user authentication and custom attributes
- Multi-language support
- Dark/light theme support
- File attachment support
- Modal presentation
- TypeScript definitions included

### Features
- **User Management**: Support for user identification, avatars, and custom attributes
- **Theming**: Light, dark, and auto color scheme support
- **Internationalization**: Multi-language support with locale configuration
- **Security**: Optional identifier hash for secure user verification
- **Customization**: Custom attributes for enhanced user context
- **Cross-platform**: Full iOS and Android support

### Technical Details
- Built with React Native WebView
- Requires React Native 60.0+
- Peer dependencies: react-native-webview, @react-native-async-storage/async-storage
- TypeScript support included
- MIT License
