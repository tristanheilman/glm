import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { updateDisplayName } from '../../api/FirebaseUsers';
import { UPDATE_DISPLAY_NAME } from '../../actions/user';

function EditName(props) {
    const [ displayName, setDisplayName ] = React.useState("");

    useEffect(() => {
        setDisplayName(props.user.name)
    }, [props.user.name]);

    const saveSemesterData = async () => {
        await updateDisplayName(props.user.userId, displayName);
        props.updateUserName(displayName);
        props.navigation.goBack();
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Display Name</Text>
                    <TextInput onChangeText={setDisplayName} value={displayName} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
                </View>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#EDEDEE'}} onPress={saveSemesterData}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ user }) => ({
    user: user.info,
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserName: (newName) => dispatch({type: UPDATE_DISPLAY_NAME, payload: newName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditName);
