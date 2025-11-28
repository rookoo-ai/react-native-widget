# Postback Handler Example

## How Postback Works

When a user clicks a postback button in the chat widget (iframe), the button component sends a message to the React Native app:

```javascript
// From the Vue component in iframe:
IFrameHelper.sendMessage({
  event: 'postback',
  data: { payload },
});
```

The React Native WebView receives this message and calls the `onPostback` callback with the payload.

## Usage Example

```javascript
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import RookooWidget from 'react-native-rookoo-widget';

const App = () => {
  const [isWidgetVisible, setWidgetVisible] = useState(false);

  const handlePostback = (payload) => {
    console.log('Postback received:', payload);
    
    // Handle different postback actions
    switch (payload) {
      case 'schedule_appointment':
        // Navigate to appointment screen
        console.log('Opening appointment scheduler');
        break;
      
      case 'view_products':
        // Navigate to products page
        console.log('Navigating to products');
        break;
      
      case 'contact_sales':
        // Open sales contact form
        console.log('Opening sales contact');
        break;
      
      default:
        // Handle generic postback
        console.log('Generic postback:', payload);
        // You can send this to your analytics, backend, etc.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button 
        title="Open Chat" 
        onPress={() => setWidgetVisible(true)} 
      />
      
      <RookooWidget
        isModalVisible={isWidgetVisible}
        websiteToken="your-website-token"
        baseUrl="https://your-chat-server.com"
        locale="en"
        colorScheme="light"
        closeModal={() => setWidgetVisible(false)}
        onPostback={handlePostback}
      />
    </View>
  );
};

export default App;
```

## Postback Message Structure

When the iframe sends a postback, the message structure is:

```javascript
{
  event: 'postback',
  data: {
    payload: 'button_action_value'  // The payload from the button
  }
}
```

## Common Use Cases

1. **Navigation**: Navigate to specific screens based on button actions
2. **Analytics**: Track user interactions with chat buttons
3. **Deep Linking**: Open specific parts of your app
4. **API Calls**: Trigger backend actions based on button clicks
5. **State Updates**: Update app state based on user choices in chat

## Example with Analytics

```javascript
import analytics from '@react-native-firebase/analytics';

const handlePostback = async (payload) => {
  // Track the postback event
  await analytics().logEvent('chat_postback', {
    payload: payload,
    timestamp: new Date().toISOString(),
  });
  
  // Handle the action
  if (payload === 'book_demo') {
    navigation.navigate('DemoBooking');
  }
};
```

## Example with API Call

```javascript
const handlePostback = async (payload) => {
  try {
    // Send postback to your backend
    const response = await fetch('https://your-api.com/postback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload,
        userId: currentUser.id,
        timestamp: Date.now(),
      }),
    });
    
    const result = await response.json();
    console.log('Postback processed:', result);
  } catch (error) {
    console.error('Error processing postback:', error);
  }
};
```
