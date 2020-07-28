
import React from 'react';
import { fetchUserById, addNewUser } from './api/FirebaseUsers';
import { SET_USER_INFO } from './actions/user';

var firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyDE0Pf1GJ5LOelacQLcut8AdyZT9Fb917Q",
  authDomain: "greek-life-manager-66e79.firebaseapp.com",
  databaseURL: "https://greek-life-manager-66e79.firebaseio.com",
  projectId: "greek-life-manager-66e79",
  storageBucket: "greek-life-manager-66e79.appspot.com",
  messagingSenderId: "23007354590",
  appId: "1:23007354590:web:1eababb18e4814a3a02c4f",
  measurementId: "G-Q2H418H2D0"
};

firebase.initializeApp(firebaseConfig);

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

export const onAuthStateChanged = async (persistStore, setSignedIn) => {
    console.log("onAuthStateChanged", firebase);

    const userCallback = (snapshot) => {
        persistStore.store.dispatch({ type: SET_USER_INFO, payload: snapshot })
    }

    // Listen for when a user logs in or logs out
    firebase.auth().onAuthStateChanged(async (user) => {

        console.log(user);
        try {
            if(user !== null) { // If the user logged in and is registered w/ firebase authentication

                // userIdCallback(user.uid); // Save the user ID to redux
                let userFetchResult = await fetchUserById(user.uid);
                console.log("FETCH: ", userFetchResult);
                if(userFetchResult.successful) {
                    if(userFetchResult.exists) {
                        userCallback(userFetchResult.data);
                        setSignedIn(true);
                    } else {
                        // User document was not found in firebase...
                        let addNewUserResult = await addNewUser(user.uid, {name: user.email, email: user.email});
                        if(addNewUserResult.successful) {
                            setSignedIn(true);
                        }
                        console.log("DOCUMENT NOT FOUND");
                    }
                } else {
                    // Some error occured fetching...
                }
                //
                // if(userFetchResult.successful) {     // If the fetch didnt have issues connecting or returning from firebase
                //     if(!userFetchResult.exists) {    // If a document was not found then we know this is a new user
                //         addNewUser(user.uid, userFetchResult.data); // Add a templated user document that we will later update
                //         if(navigationRef.current) {
                //             retrieveUserMessagingToken(persistStore, user.uid);
                //             navigationRef.current.navigate("NewAccount");
                //         }
                //     } else {
                //         if(navigationRef.current) {
                //             retrieveUserMessagingToken(persistStore, user.uid);
                //             navigationRef.current.navigate("Root");
                //             setSignedIn(true);
                //         }
                //     }
                //
                // } else {
                //     // TODO Add some fallback safe code for any chance the request above fails
                //
                // }
            } else { // If the user has logged out
                setSignedIn(false);

                //console.log("NAV: ", navigationRef);
                // if(navigationRef.current) {
                //     navigationRef.current.navigate("LoginOptions")
                // }
            }

        }
        catch(err) {
            // TODO Do something here in case everything blows up....
            console.log(err);
        }

    });
}
