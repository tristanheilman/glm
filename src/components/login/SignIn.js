// react native components
import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { Input } from 'react-native-elements'
var firebase = require('firebase/app');
require('firebase/auth');

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.confirmationPromise = null;

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);

        this.state = {
            email: '',
            password: '',
            showLoadingActivity: false
        }
    }

    onEmailChange(text) {
        this.setState({email: text});
    }

    onPasswordChange(text) {
        this.setState({password: text});
    }

    async loginUser() {
        this.setState({showLoadingActivity: true});

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.setState({showLoadingActivity: false});
        })
        .catch((error) => {
            this.setState({showLoadingActivity: false});
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("ERROR: ", errorCode, errorMessage);
        });


    }
    // TODO Split into at least two components for rendering
    // TODO Add a back Button for when the createAccount screen renders
    render() {
        return (
            <KeyboardAvoidingView behavior={"padding"} style={styles.loginComponent}>
                    <View style={styles.textboxContainer}>
                        <Text style={styles.subheaderTextPrimary}>{this.state.responseMessage}</Text>
                    </View>
                    <View style={styles.textboxContainer}>
                        <Input keyboardType={"phone-pad"} label={'Email'} labelStyle={{color: '#ffffff'}} inputStyle={styles.textboxInput} onChangeText={(text) => this.onEmailChange(text)}/>
                    </View>
                    <View style={styles.textboxContainer}>
                        <Input keyboardType={"phone-pad"} label={'Password'} labelStyle={{color: '#ffffff'}} inputStyle={styles.textboxInput} onChangeText={(text) => this.onPasswordChange(text)}/>
                    </View>
                    <View style={styles.loginComponentButtonContainer}>
                        <TouchableOpacity style={styles.loginButton} title='Login' onPress={() => this.loginUser()}>
                            <Text style={{color: '#6995F5', fontWeight: 'bold', fontSize: 16}}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    newAccountComponent: {
        width: 300,
        backgroundColor: '#91B2F9',
        borderRadius: 8
    },
    loginComponent: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#91B2F9',
    },
    textboxContainer: {
        margin: 8
    },
    loginComponentButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 48,
        paddingRight: 48,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        color: '#91B2F9',
    },
    createAccountFooterButton: {
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        color: '#91B2F9',
    },
    createAccountButton: {
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 48,
        paddingRight: 48,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        color: '#91B2F9',
    },
    createAccountFooter: {
        display: 'flex',
        justifyContent: 'center',
    },
    createAccountFooterButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textboxInput: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10
    },
    passwordInput: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10
    },
    orText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});

export default SignIn;
