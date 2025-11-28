# Rookoo React Native Widget Example

This example demonstrates how to use the `@rookoo/react-native-widget` package in a React Native application.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **For iOS development:**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Configure the widget:**
   - Update the `websiteToken` in `App.js` with your actual Rookoo website token
   - Update the `baseUrl` with your Rookoo installation URL (e.g., `https://app.rookoo.ai`)

## Running the Example

### iOS
```bash
npx react-native run-ios
```

### Android
```bash
npx react-native run-android
```

## Configuration

The example shows how to configure the widget with:

- **User information** (name, email, avatar)
- **Custom attributes** (accountId, pricing plan, etc.)
- **Locale** settings
- **Color scheme** (light/dark/auto)

## Widget Features Demonstrated

- Modal presentation
- User data integration
- Custom attributes
- Real-time chat functionality
- File attachment support
- Multi-language support

## Using in Your Own Project

To integrate this widget into your own React Native project:

1. Install the package:
   ```bash
   npm install @rookoo/react-native-widget
   ```

2. Install peer dependencies:
   ```bash
   npm install react-native-webview @react-native-async-storage/async-storage
   ```

3. Follow the platform-specific setup instructions in the main README.

## Troubleshooting

- Ensure all peer dependencies are properly installed
- For iOS, make sure to run `pod install` after installing dependencies
- Check that your website token and base URL are correctly configured
- Verify network connectivity to your Rookoo installation
