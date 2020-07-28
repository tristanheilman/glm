import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
var firebase = require('firebase/app');
require('firebase/auth');

function SignOut(props) {

    useEffect(() => {

    }, []);

    const signOut = () => {
        firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
        })
        .catch(function(error) {
            // An error happened.
        });
    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={signOut}>
                <Text style={{flex: 1, padding: 20}}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignOut;
