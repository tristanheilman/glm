import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

import Message from './Message';

import { setMessageBoard, ADD_NEW_MESSAGE } from '../../actions/messages';
import { fetchMessages, addNewMessage } from '../../api/FirebaseMessages';

function MessageBoard(props) {
    const [ lastVisible, setLastVisible ] = React.useState({});
    const [ refresh, setRefresh ] = React.useState(false);
    const [ messageText, setMessageText ] = React.useState("")

    useEffect(() => {
        // TODO Fetch classes function here
        fetchMessages(props.setMessages, setLastVisible, setRefresh);
    }, [props.setMessages]);

    const sendNewMessage = () => {
        const newMessage = {
            ownerName: props.user.name,
            ownerEmail: props.user.email,
            message: messageText,
            replies: []
        }

        addNewMessage(messageText, props.user)
        props.addNewMessage(newMessage);
        setMessageText("");
    }

    return (
        <View style={{display: 'flex', flex: 1, padding: 10}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 20}}>
                <TouchableOpacity style={{padding: 10, backgroundColor: '#6995F5'}} onPress={sendNewMessage}>
                    <Text>Send Message</Text>
                </TouchableOpacity>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDEDEE'}}>
                    <Text style={{padding: 10}}>Message:</Text>
                    <TextInput onChangeText={setMessageText} value={messageText} style={{borderWidth: 1, borderColor: '#707070', height: 30}} />
                </View>
            </View>
            <FlatList
                data={props.messages}
                keyExtractor={(item, index) => item.messageId}
                renderItem={({item, index}) => <Message navigation={props.navigation} item={item} index={index}/>}
            />
        </View>
    );
}


const mapStateToProps = ({ user, messageBoard }) => ({
    messages: messageBoard.messages,
    user: user.info
});

const mapDispatchToProps = (dispatch) => {
    return {
        setMessages: (messages) => dispatch(setMessageBoard(messages)),
        addNewMessage: (newMessage) => dispatch({type: ADD_NEW_MESSAGE, payload: newMessage})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard);
