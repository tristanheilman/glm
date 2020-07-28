import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function Replies(props) {

    useEffect(() => {

    }, []);

    return (
        <View key={props.index} style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            {props.replies.map((reply, index) =>
                <View key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20}}>{reply.ownerName}</Text>
                    <Text>{reply.message}</Text>
                </View>
            )}
        </View>
    );
}

export default Replies;
