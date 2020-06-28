import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

function Replies(props) {

    useEffect(() => {

    }, []);

    return (
        <View key={props.index} style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            <FlatList
                data={props.replies}
                renderItem={({item, index}) =>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20}}>{item.name}</Text>
                        <Text>{item.text}</Text>
                    </View>
                }
            />
        </View>
    );
}

export default Replies;
