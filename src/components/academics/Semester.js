import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Semester(props) {

    useEffect(() => {

    }, []);


    const addCourse = (index) => {
        props.navigation.navigate("AddCourse", {index: index});
    }

    return (
        <View key={props.index} style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{props.item.semester}</Text>
                {!props.showAdd ? <View /> :
                    <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={() => addCourse(props.index)}>
                        <Text>Add Course</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>Class Name</Text>
                <Text>Credit Hours</Text>
                <Text>Grade</Text>
            </View>
            {props.item.courses.map((course, index) => {
                return (
                    <View key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text>{course.name}</Text>
                        <Text>{course.hours}</Text>
                        <Text>{course.grade}</Text>
                    </View>
                )
            })}
        </View>
    );
}

export default Semester;
