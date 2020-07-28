import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Semester from './Semester';

import { fetchSemesters } from '../../api/FirebaseUserSemesters';

import { setClassList } from '../../actions/academics';

function AcademicManager(props) {

    useEffect(() => {
        // TODO Fetch classes function here
        fetchSemesters(props.userId, props.setClasses);

    }, [props.setClasses, props.userId]);

    const addSemester = () => {
        props.navigation.navigate("AddSemester");
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={addSemester}>
                    <Text>Add Semester</Text>
                </TouchableOpacity>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <Text>Courses Taken</Text>
                <Text>Applicable Courses</Text>
                <Text>GPA</Text>
            </View>
            <FlatList
                data={props.classes}
                keyExtractor={(item, index) => item.semesterId}
                renderItem={({item, index}) => <Semester navigation={props.navigation} item={item} showAdd={true} />}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(AcademicManager);
