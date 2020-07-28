import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Replies from './Replies';

import { replyToMessage } from '../../actions/messages';
import { addReply } from '../../api/FirebaseMessages';

function Message(props) {
    const [ replyMessage, setReplyMessage ] = React.useState("")

    useEffect(() => {

    }, []);

    const replyToMessage = () => {
        const newReply = {
            ownerName: props.user.name,
            ownerEmail: props.user.email,
            message: replyMessage
        };

        console.log(props.index);
        console.log("REPLY: ", replyMessage);

        addReply(props.item.messageId, replyMessage, props.user);
        props.replyToMessage(props.index, newReply);
        setReplyMessage("");
    }

    return (
        <View key={props.index} style={{display: 'flex', margin: 10, padding: 20, backgroundColor: '#EDEDEE'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20}}>{props.item.ownerName}</Text>
                <Text>{props.item.message}</Text>
            </View>
            <Replies replies={props.item.replies} />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDEDEE'}}>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={replyToMessage}>
                    <Text>Reply</Text>
                </TouchableOpacity>
                <Text style={{padding: 10}}>Message:</Text>
                <TextInput onChangeText={setReplyMessage} value={replyMessage} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
            </View>
        </View>
    );
}


const mapStateToProps = ({ user }) => ({
    user: user.info
});


const mapDispatchToProps = (dispatch) => {
    return {
        replyToMessage: (index, newMessage) => dispatch(replyToMessage(index, newMessage))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
