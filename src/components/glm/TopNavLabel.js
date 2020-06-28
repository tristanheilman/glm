import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function TopNavLabel(props) {

    useEffect(() => {

    }, []);

    console.log(props.text);

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{flex: 1, padding: 20}}>{props.text}</Text>
        </View>
    );
}

export default TopNavLabel;
