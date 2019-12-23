/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {configureStore} from './redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales';
import {Provider} from 'react-redux';
import AppNavigator from './navigation';

const App = () => {
    const [isLoaded, setLoaded] = useState(false);
    const store = configureStore(() => {
        setLoaded(true);
    });
    return (
        isLoaded && (
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <AppNavigator />
                </I18nextProvider>
            </Provider>
        )
    );
};

export default App;
