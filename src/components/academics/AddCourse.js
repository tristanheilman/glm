import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Semester from './Semester';

import { updateSemesterCourseList } from '../../actions/academics';
import { addCourse } from '../../api/FirebaseUserSemesters';

function AddCourse(props) {
    const { item } = props.route.params;
    const [ className, setClassName ] = React.useState("");
    const [ creditHours, setCreditHours ] = React.useState("");
    const [ grade, setGrade ] = React.useState("");
    const [ notes, setNotes ] = React.useState("");


    useEffect(() => {

    }, []);

    const saveSemesterData = async () => {
        console.log("Data: ", className, creditHours, grade, notes);
        let newCourse = {
            grade: grade,
            hours: creditHours,
            name: className
        };

        let updatedItem = item;
        updatedItem.courses.push(newCourse);

        await addCourse(props.userId, item.semesterId, newCourse);
        props.updateSemesterCourseList(updatedItem);
        clearInputValues();
    }

    const clearInputValues = () => {
        setClassName("");
        setCreditHours("");
        setGrade("");
        setNotes("");
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <Text style={{fontSize: 20, padding: 20}}>Semester</Text>
            <Semester navigation={props.navigation} item={item} showAdd={false} />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Class Name</Text>
                    <TextInput onChangeText={setClassName} value={className} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Credit Hours</Text>
                    <TextInput onChangeText={setCreditHours} value={creditHours} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Grade</Text>
                    <TextInput onChangeText={setGrade} value={grade} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Notes</Text>
                    <TextInput onChangeText={setNotes} value={notes} style={{borderWidth: 1, borderColor: '#707070', height: 30}}/>
                </View>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveSemesterData}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ user, academics }) => ({
    userId: user.info.userId,
    classes: academics.classes
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateSemesterCourseList: (newClasses) => dispatch(updateSemesterCourseList(newClasses))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
