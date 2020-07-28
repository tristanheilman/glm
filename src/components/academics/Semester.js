import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Semester(props) {

    useEffect(() => {

    }, []);


    const addCourse = () => {
        props.navigation.navigate("AddCourse", {item: props.item});
    }

    return (
        <View style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{props.item.title}</Text>
                {!props.showAdd ? <View /> :
                    <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={() => addCourse()}>
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
