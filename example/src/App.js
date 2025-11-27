import React, { useEffect, useState } from 'react';
import { Appearance, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { storeHelper, findColors } from './utils';
import WebView from './WebView';
import { COLOR_WHITE } from './constants';

const propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  websiteToken: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  cwCookie: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    email: PropTypes.string,
    identifier_hash: PropTypes.string,
  }),
  locale: PropTypes.string,
  colorScheme: PropTypes.oneOf(['dark', 'light', 'auto']),
  customAttributes: PropTypes.shape({}),
  closeModal: PropTypes.func,
  onPostback: PropTypes.func,
};

const RookooWidget = ({
  isModalVisible,
  baseUrl,
  websiteToken,
  user = {},
  locale = 'en',
  colorScheme = 'light',
  customAttributes = {},
  closeModal,
  onPostback = null,
}) => {
  const [cwCookie, setCookie] = useState('');

  useEffect(() => {
    async function fetchData() {
      await storeHelper.clearCookie(); // Clear cookie for testing purposes
      const value = await storeHelper.getCookie();
      setCookie(value);
    }
    fetchData();
  }, []);
  const appColorScheme = Appearance.getColorScheme();

  const { headerBackgroundColor, mainBackgroundColor } = findColors({
    colorScheme,
    appColorScheme,
  });
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={closeModal}>
      <SafeAreaView style={[styles.container, { backgroundColor: headerBackgroundColor }]}>
        <View style={[styles.content, { backgroundColor: mainBackgroundColor }]}>
          <WebView
            websiteToken={websiteToken}
            cwCookie={cwCookie}
            user={user}
            baseUrl={baseUrl}
            locale={locale}
            colorScheme={colorScheme}
            customAttributes={customAttributes}
            closeModal={closeModal}
            onPostback={onPostback}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

RookooWidget.propTypes = propTypes;

export default RookooWidget;
