import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function Event(props) {

    useEffect(() => {

    }, []);

    return (
        <View key={props.index} style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20}}>{props.item.name}</Text>
                <Text>{props.item.location}</Text>
                <Text>{props.item.date.toString()}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text>{props.item.description}</Text>
            </View>
        </View>
    );
}

export default Event;
