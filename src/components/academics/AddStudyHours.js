import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function AddStudyHours(props) {
    const [ className, setClassName ] = React.useState("")
    const [ creditHours, setCreditHours ] = React.useState("")
    const [ grade, setGrade ] = React.useState("")
    const [ notes, setNotes ] = React.useState("")

    useEffect(() => {

    }, []);

    const saveStudyHourData =() => {
        console.log("Data: ", className, creditHours, grade, notes);

    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{flex: 1, padding: 20}}>Add Semester</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                <Text style={{padding: 10}}>Class Name</Text>
                <TextInput onChangeText={setClassName} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                <Text style={{padding: 10}}>Credit Hours</Text>
                <TextInput onChangeText={setCreditHours} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                <Text style={{padding: 10}}>Grade</Text>
                <TextInput onChangeText={setGrade} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                <Text style={{padding: 10}}>Notes</Text>
                <TextInput onChangeText={setNotes} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
            </View>
            <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveStudyHourData}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddStudyHours;
