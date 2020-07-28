import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator, { LoginNavigator } from './navigation';
import {
    onAuthStateChanged,
    isMountedRef,
    navigationRef
} from './firebase';
import persist from './reducers/store';

const persistStore = persist();

function App() {
    const [ signedIn, setSignedIn ] = React.useState(false);

    useEffect(() => {

        onAuthStateChanged(persistStore, setSignedIn)

        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    }, []);


    return (
        <Provider store={persistStore.store} >
            <PersistGate persistor={persistStore.persistor}>
                <NavigationContainer ref={navigationRef}>
                    {signedIn ? <Navigator /> : <LoginNavigator />}
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
