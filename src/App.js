import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation';
import persist from './reducers/store';

const persistStore = persist();

function App() {

    useEffect(() => {

    }, []);

    return (
        <Provider store={persistStore.store} >
            <PersistGate persistor={persistStore.persistor}>
                <NavigationContainer>
                    <Navigator />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
