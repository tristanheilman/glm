var firebase = require('firebase/app');
require('firebase/firestore');

/**
    @desc adds an event document to the 'events' collection
    @param {postDetails} - details entered in by the user about the event
    @param {placeDetails} - details about event location fetched from google places api
    @param {user} - user document details
    @return {Promise} - promise from firebase event document addition
**/
export function addNewEvent(newEvent, user) {
    const addNewEventPromise = firebase.firestore().collection("events").add({
        name: newEvent.name,
        location: newEvent.location,
        date: newEvent.date,
        description: newEvent.description,
        owner: user
    })
    .then(docRef => {
        console.log('[events add] Successful! ', docRef);
        return {successful: true, data: docRef};
    })
    .catch(error => {
        console.log('[events add] Error occured! ', error);
        return {successful: false, data: error};;
    });

    return addNewEventPromise;
}


/**
    @desc fetches the event documents that should be shown in the network event list feed
    @param {userId} - ID of the user fetching documents
    @param {setEventList} - callback to set the events for the network event feed
    @param {setLastVisible} - callback to set the last visbile event fetched
    @param {setRefresh} - callback to hide the Refresh Control component
**/
export function fetchEvents(setEventList, setLastVisible, setRefresh) {
    let date = new Date();
    let pastDate = new Date();
    pastDate.setHours(date.getHours()-4);
    console.log("DATE: ", date);

    console.log("DATE: ", pastDate);

    let initialQuery = firebase.firestore().collection('events')
    .limit(10)
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            console.log("[Collection: 'events' Function: fetchNetworkEvents] Documents found!");
            var lastVisible = snapshot.docs[snapshot.docs.length-1];
            setLastVisible(lastVisible);

            let formattedEvents = snapshot.docs.map(snap => {
                let data = snap.data();
                data.eventId = snap.id;

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

            setEventList(formattedEvents);

            if(setRefresh) {
                setRefresh(false);
            }
            return {
                successful: true,
                empty: false
            };
        } else {
            console.log("[Collection: 'events' Function: fetchNetworkEvents] No documents found!");
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
        console.log("[Collection: 'events' Function: fetchNetworkEvents] Error!", error);
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
