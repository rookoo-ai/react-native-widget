# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1]

### Added
- Added `onPostback` callback prop to handle postback events from chat buttons
- Support for capturing postback actions triggered from interactive buttons in the chat widget

### Changed
- Replaced `react-native-modal` with React Native's built-in `Modal` component to fix BackHandler compatibility issues

## [0.0.25]

### Changed
- Migrated to v2 Rookoo widget

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
