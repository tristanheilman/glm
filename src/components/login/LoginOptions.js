// react native components
import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';

function LoginOptions(props) {
    const signIn = () => {
        props.navigation.navigate("SignIn");
    }

    const signUp = () => {
        props.navigation.navigate("SignUp");
    }

    return (
        <KeyboardAvoidingView behavior={"padding"} style={styles.loginComponent}>
                <View style={styles.loginComponentButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} title='Login' onPress={signIn}>
                        <Text style={{color: '#6995F5', fontWeight: 'bold', fontSize: 16}}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginComponentButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} title='Login' onPress={signUp}>
                        <Text style={{color: '#6995F5', fontWeight: 'bold', fontSize: 16}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
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

export default LoginOptions;
