import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Event from './Event';

import { setEventList } from '../../actions/activities';

function EventManager(props) {

    useEffect(() => {
        // TODO Fetch classes function here

    }, []);

    const addEvent = () => {
        props.navigation.navigate("AddEvent");
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={addEvent}>
                    <Text>Add Event</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={props.events}
                renderItem={({item, index}) => <Event navigation={props.navigation} item={item} index={index} showAdd={true} />}
            />
        </View>
    );
}


const mapStateToProps = ({ activities }) => ({
    events: activities.events
});

const mapDispatchToProps = (dispatch) => {
    return {
        setEvents: (events) => dispatch(setEventList(events))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventManager);
