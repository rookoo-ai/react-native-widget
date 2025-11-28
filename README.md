<h1>
rookoo-react-native-widget
</h1>

![](https://img.shields.io/npm/v/@rookoo/react-native-widget?style=flat)
![](https://img.shields.io/npm/dt/@rookoo/react-native-widget.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
![](https://img.shields.io/npm/l/@rookoo/@rookoo/react-native-widget)

- **Supported Rookoo version:** 2.16.0+

### Installation

Install the library using either yarn or npm like so:

```sh
yarn add @rookoo/react-native-widget
```

OR

```sh
npm install --save @rookoo/react-native-widget
```

This library depends on [react-native-webview](https://www.npmjs.com/package/react-native-webview) and [async-storage](https://github.com/react-native-async-storage/async-storage). Please follow the instructions provided in the docs.

**Peer Dependencies:**
```bash
npm install react-native-webview @react-native-async-storage/async-storage
```

### iOS Installation

If you're using React Native versions > 60.0, it's relatively straightforward.

```sh
cd ios && pod install
```

### How to use

1. Create a website channel in rookoo
2. Replace `websiteToken` prop and `baseUrl` with your actual values

**Basic Implementation:**

```javascript
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RookooWidget from '@rookoo/react-native-widget';

const App = () => {
  const [showWidget, toggleWidget] = useState(false);
  
  // Configure your widget
  const websiteToken = 'YOUR_WEBSITE_TOKEN';
  const baseUrl = 'https://app.rookoo.ai'; // or your custom Rookoo installation
  
  const user = {
    identifier: 'john@gmail.com',
    name: 'John Samuel',
    avatar_url: '',
    email: 'john@gmail.com',
    identifier_hash: '', // Optional: for secure user identification
  };
  
  const customAttributes = { 
    accountId: 1, 
    pricingPlan: 'paid', 
    status: 'active' 
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => toggleWidget(true)}
      >
        <Text style={styles.buttonText}>Open Chat</Text>
      </TouchableOpacity>
      
      {showWidget && (
        <RookooWidget
          websiteToken={websiteToken}
          baseUrl={baseUrl}
          closeModal={() => toggleWidget(false)}
          isModalVisible={showWidget}
          user={user}
          customAttributes={customAttributes}
          locale="en"
          colorScheme="light"
        />
      )}
    </SafeAreaView>
  );
};
```

```javascript
const App = () => {
  const [showWidget, toggleWidget] = useState(false);
  const user = {
    identifier: 'john@gmail.com',
    name: 'John Samuel',
    avatar_url: '',
    email: 'john@gmail.com',
    identifier_hash: '',
  };
  const customAttributes = { accountId: 1, pricingPlan: 'paid', status: 'active' };
  const websiteToken = 'WEBSITE_TOKEN';
  const baseUrl = 'ROOKOO_INSTALLATION_URL';
  const locale = 'en';
  const colorScheme='dark'

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => toggleWidget(true)}>
          <Text style={styles.buttonText}>Open widget</Text>
        </TouchableOpacity>
      </View>
      {
        showWidget&&
          <RookooWidget
            websiteToken={websiteToken}
            locale={locale}
            baseUrl={baseUrl}
            closeModal={() => toggleWidget(false)}
            isModalVisible={showWidget}
            user={user}
            customAttributes={customAttributes}
            colorScheme={colorScheme}
          />
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    height: 48,
    marginTop: 32,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#1F93FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 10,
  },
});

export default App;
```

You're done!

The complete example with styling is available in the [`/Example`](./Example) folder.

## Configuration Options

### Props

<table class="table">
<thead><tr>
  <th>Name</th><th>Default</th><th>Type</th><th>Description</th>
</tr></thead>
<tbody>
  <tr>
    <td>baseUrl</td>
    <td> - </td>
    <td> String </td>
    <td>Rookoo installation URL</td>
  </tr>
 <tr>
    <td>websiteToken</td>
    <td> - </td>
    <td> String </td>
    <td>Website channel token</td>
  </tr>
  <tr>
    <td>colorScheme</td>
    <td> light </td>
    <td> String </td>
    <td>Widget color scheme (light/dark/auto)</td>
  </tr>
   <tr>
    <td>locale</td>
    <td> en </td>
    <td> String </td>
    <td>Locale</td>
  </tr>
  <tr>
    <td>isModalVisible</td>
    <td> false </td>
    <td> Boolean </td>
    <td>Widget is visible or not</td>
  </tr>
    <tr>
    <td>closeModal</td>
    <td> - </td>
    <td> Function </td>
    <td>Close event</td>
  </tr>
  <tr>
	  <td>user</td>
    <td> {} </td>
    <td> Object </td>
    <td>User information about the user like email, username and avatar_url</td>
  </tr>
  <tr>
   <td>customAttributes</td>
    <td> {} </td>
    <td> Object </td>
    <td>Additional information about the customer</td>
  </tr>
 </tbody>
</table>

## Development & Publishing

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes to the `src/` directory
4. Test changes using the Example project:
   ```bash
   cd example
   npm install
   npx react-native run-ios  # or run-android
   ```

### Publishing
The package is automatically published to NPM when:
- A new version is tagged and pushed to the main branch
- The version in `package.json` is updated
- All linting checks pass

To publish a new version:
1. Update the version in `package.json`
2. Commit and push changes
3. The GitHub Action will automatically publish to NPM

### NPM Package
- **Registry**: https://registry.npmjs.org/
- **Package**: [@rookoo/react-native-widget](https://www.npmjs.com/package/@rookoo/react-native-widget)

### Contributing
Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our development process and how to submit pull requests.

### Code of Conduct
This project follows our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

_Rookoo_ &copy; 2017-2025, Rookoo Inc - Released under the MIT License.

### Acknowledgements

> **📝 Note:** This is a fork of the original [chatwoot-react-native-widget](https://github.com/chatwoot/chatwoot-react-native-widget) adapted for Rookoo. The widget has been updated to work with Rookoo's chat infrastructure while maintaining the same API and functionality.
We extend our gratitude to the original [Chatwoot team](https://github.com/chatwoot) for creating the foundational widget that made this adaptation possible.