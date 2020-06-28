import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Semester from './Semester';

import { setClassList } from '../../actions/academics';

function AcademicManager(props) {

    useEffect(() => {
        // TODO Fetch classes function here

    }, []);

    const addStudyHours = () => {
        props.navigation.navigate("AddStudyHours");
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={addStudyHours}>
                    <Text>Record Study Hours Button</Text>
                </TouchableOpacity>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <Text>Courses Taken</Text>
                <Text>Applicable Courses</Text>
                <Text>GPA</Text>
            </View>
            <FlatList
                data={props.classes}
                renderItem={({item, index}) => <Semester navigation={props.navigation} item={item} index={index} showAdd={true} />}
            />
        </View>
    );
}


const mapStateToProps = ({ academics }) => ({
    classes: academics.classes
});

const mapDispatchToProps = (dispatch) => {
    return {
        setClasses: (classes) => dispatch(setClassList(classes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcademicManager);
