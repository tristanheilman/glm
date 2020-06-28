import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function BackButton(props) {

    useEffect(() => {

    }, []);

    const goBack = () => {
        props.navigation.goBack();
    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={goBack}>
                <Text style={{flex: 1, padding: 20}}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;
