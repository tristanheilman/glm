import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

function TopNavLabel(props) {

    useEffect(() => {

    }, []);

    const showEditName = () => {
        props.navigation.navigate("EditName");
    }

    if(props.showName) {
        return (
            <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onPress={showEditName}>
                <Text style={{flex: 1, padding: 20}}>{"Welcome, " + props.userName}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, padding: 20}}>{props.text}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    userName: user.info.name
});

export default connect(mapStateToProps, null)(TopNavLabel);
