import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { fetchEvents } from '../../api/FirebaseEvents';
import { setEventList } from '../../actions/activities';

import Event from './Event';


function EventManager(props) {
    const [ lastVisible, setLastVisible ] = React.useState({});
    const [ refresh, setRefresh ] = React.useState({});


    useEffect(() => {
        fetchEvents(props.setEvents, setLastVisible, setRefresh)
    }, [props.setEvents]);

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
                keyExtractor={(item, index) => item.eventId}
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
