var firebase = require('firebase/app');
require('firebase/firestore');

/**
    @desc adds an event document to the 'events' collection
    @param {postDetails} - details entered in by the user about the event
    @param {placeDetails} - details about event location fetched from google places api
    @param {user} - user document details
    @return {Promise} - promise from firebase event document addition
**/
export function addNewMessage(newMessage, sender) {
    const addNewEventPromise = firebase.firestore().collection("messages").add({
        ownerName: sender.name,
        ownerEmail: sender.email,
        message: newMessage,
        replies: []
    })
    .then(docRef => {
        console.log('[messages add] Successful! ', docRef);
        return {successful: true, data: docRef};
    })
    .catch(error => {
        console.log('[messages add] Error occured! ', error);
        return {successful: false, data: error};;
    });

    return addNewEventPromise;
}

/**
    @desc adds an event document to the 'events' collection
    @param {postDetails} - details entered in by the user about the event
    @param {placeDetails} - details about event location fetched from google places api
    @param {user} - user document details
    @return {Promise} - promise from firebase event document addition
**/
export function addReply(messageId, replyMessage, sender) {
    const addReplyMessagePromise = firebase.firestore().collection("messages").doc(messageId).update({
        replies: firebase.firestore.FieldValue.arrayUnion({
            ownerName: sender.name,
            ownerEmail: sender.email,
            message: replyMessage,
        })
    })
    .then(docRef => {
        console.log('[users/semesters course add] Successful! ', docRef);
        return {successful: true, data: docRef};
    })
    .catch(error => {
        console.log('[users/semesters course add] Error occured! ', error);
        return {successful: false, data: error};;
    });

    return addReplyMessagePromise;
}


/**
    @desc fetches the event documents that should be shown in the network event list feed
    @param {userId} - ID of the user fetching documents
    @param {setEventList} - callback to set the events for the network event feed
    @param {setLastVisible} - callback to set the last visbile event fetched
    @param {setRefresh} - callback to hide the Refresh Control component
**/
export function fetchMessages(setMessageList, setLastVisible, setRefresh) {

    let initialQuery = firebase.firestore().collection('messages')
    .limit(10)
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            console.log("[Collection: 'events' Function: fetchMessages] Documents found!");
            var lastVisible = snapshot.docs[snapshot.docs.length-1];
            setLastVisible(lastVisible);

            let formattedEvents = snapshot.docs.map(snap => {
                let data = snap.data();
                data.messageId = snap.id;

                // data.dateString = data.date.toDate().toLocaleDateString("en-US", {
                //     weekday: "long",
                //     month: "long",
                //     day: "numeric"
                // });
                // data.timeString = data.date.toDate().toLocaleTimeString("en-US", {
                //     hour: "numeric",
                //     minute: "2-digit"
                // });

                return data;
            });

            setMessageList(formattedEvents);

            if(setRefresh) {
                setRefresh(false);
            }
            return {
                successful: true,
                empty: false
            };
        } else {
            console.log("[Collection: 'events' Function: fetchMessages] No documents found!");
            if(setRefresh) {
                setRefresh(false);
            }
            return {
                successful: true,
                empty: true
            };
        }
    })
    .catch((error) => {
        console.log("[Collection: 'events' Function: fetchMessages] Error!", error);
        if(setRefresh) {
            setRefresh(false);
        }

        return {
            successful: false,
            error: error
        };
    });

    return initialQuery;
}
