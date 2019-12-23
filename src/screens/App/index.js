/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import T from '../../components/T';
import i18n from '../../locales';
import styles from './styles';

class AppScreen extends React.PureComponent {
  state = {
    language: i18n.language,
  };

  render() {
    const {language} = this.state;
    return (
      <View style={styles.container}>
        <T text="AppScreen.hello" />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            i18n.changeLanguage(
              Object.keys(i18n.options.resources).find(l => l !== language),
              () => {
                this.setState({language: i18n.language});
              },
            )
          }>
          <T text="AppScreen.changeLanguage" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AppScreen;
