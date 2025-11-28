declare module '@rookoo/react-native-widget' {
  import React from 'react';

  export interface RookooWidgetProps {
    websiteToken: string;
    locale?: string;
    baseUrl: string;
    colorScheme?: 'light' | 'auto' | 'dark';
    closeModal: () => void;
    isModalVisible: boolean;
    user?: {
      identifier?: string;
      name?: string;
      avatar_url?: string;
      email?: string;
      identifier_hash?: string;
    };
    // This can actually be any object
    customAttributes?: Record<string, unknown>;
    onPostback?: (payload: any) => void;
  }

  class RookooWidget extends React.Component<RookooWidgetProps, any> {}
  export default RookooWidget;
}
