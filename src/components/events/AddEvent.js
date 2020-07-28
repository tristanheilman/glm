import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { ADD_NEW_EVENT } from '../../actions/activities';
import { addNewEvent } from '../../api/FirebaseEvents';

function AddEvent(props) {
    const [ name, setName ] = React.useState("")
    const [ location, setLocation ] = React.useState("")
    const [ date, setDate ] = React.useState("")
    const [ description, setDescription ] = React.useState("")

    useEffect(() => {

    }, []);

    const saveNewEvent =() => {
        console.log("Data: ", name, location, date, description);

        let newEvent = {
            name: name,
            location: location,
            date: date,
            description: description
        };

        props.addNewEvent(newEvent);
        addNewEvent(newEvent, {name: "Default", email: "default@default.com"});
        props.navigation.goBack();
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <Text style={{fontSize: 20, padding: 20}}>Semester</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Event Name</Text>
                    <TextInput onChangeText={setName} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Location</Text>
                    <TextInput onChangeText={setLocation} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Date</Text>
                    <TextInput onChangeText={setDate} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Description</Text>
                    <TextInput onChangeText={setDescription} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveNewEvent}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ activities }) => ({
    events: activities.events
});

const mapDispatchToProps = (dispatch) => {
    return {
        addNewEvent: (newEvent) => dispatch({ type: ADD_NEW_EVENT, payload: newEvent })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
