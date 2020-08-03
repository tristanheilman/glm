import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { addNewSemester } from '../../api/FirebaseUserSemesters';
import { setClassList } from '../../actions/academics';

function AddSemester(props) {
    const [ semesterTitle, setSemesterTitle ] = React.useState("");
    // const [ creditHours, setCreditHours ] = React.useState("")
    // const [ grade, setGrade ] = React.useState("")
    // const [ notes, setNotes ] = React.useState("")

    useEffect(() => {

    }, []);

    const saveSemesterData = async () => {
        let newSemester = {
            title: semesterTitle,
            courses: []
        };

        let result = await addNewSemester(props.userId, semesterTitle, []);

        if(result.successful) {
            let updatedList = props.classes;
            newSemester.semesterId = result.data.id;
            updatedList.push(newSemester);
            props.setClasses(updatedList);

            props.navigation.goBack();
        }
    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{flex: 1, padding: 20}}>Add Semester</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                <Text style={{padding: 10}}>Semester Title</Text>
                <TextInput onChangeText={setSemesterTitle} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
            </View>
            <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveSemesterData}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = ({ user, academics }) => ({
    userId: user.info.userId,
    classes: academics.classes
});

const mapDispatchToProps = (dispatch) => {
    return {
        setClasses: (classes) => dispatch(setClassList(classes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSemester);
