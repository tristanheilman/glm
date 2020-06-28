import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Semester from './Semester';

import { updateSemesterCourseList } from '../../actions/academics';

function AddCourse(props) {
    const { index } = props.route.params;
    const [ item, setItem ] = React.useState(props.classes[index]);
    const [ className, setClassName ] = React.useState("");
    const [ creditHours, setCreditHours ] = React.useState("");
    const [ grade, setGrade ] = React.useState("");
    const [ notes, setNotes ] = React.useState("");


    useEffect(() => {
        
    }, []);

    const saveSemesterData =() => {
        console.log("Data: ", className, creditHours, grade, notes);
        let updatedItem = item;
        updatedItem.courses.push({
            grade: grade,
            hours: creditHours,
            name: className
        });

        props.updateSemesterCourseList(updatedItem);
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <Text style={{fontSize: 20, padding: 20}}>Semester</Text>
            <Semester navigation={props.navigation} item={item} index={props.index} showAdd={false} />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
                <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveSemesterData}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ academics }) => ({
    classes: academics.classes
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateSemesterCourseList: (newClasses) => dispatch(updateSemesterCourseList(newClasses))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
