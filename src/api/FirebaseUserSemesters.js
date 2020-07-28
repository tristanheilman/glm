var firebase = require('firebase/app');
require('firebase/firestore');

/**
    @desc adds an event document to the 'events' collection
    @param {postDetails} - details entered in by the user about the event
    @param {placeDetails} - details about event location fetched from google places api
    @param {user} - user document details
    @return {Promise} - promise from firebase event document addition
**/
export function addNewSemester(userId, semesterTitle, courses) {
    const addNewSemesterPromise = firebase.firestore().collection("users").doc(userId).collection("semesters").add({
        title: semesterTitle,
        courses: courses
    })
    .then(docRef => {
        console.log('[users/semesters add] Successful! ', docRef);
        return {successful: true, data: docRef};
    })
    .catch(error => {
        console.log('[users/semesters add] Error occured! ', error);
        return {successful: false, data: error};;
    });

    return addNewSemesterPromise;
}

/**
    @desc adds an event document to the 'events' collection
    @param {postDetails} - details entered in by the user about the event
    @param {placeDetails} - details about event location fetched from google places api
    @param {user} - user document details
    @return {Promise} - promise from firebase event document addition
**/
export function addCourse(userId, semesterId, course) {
    const addNewSemesterPromise = firebase.firestore().collection("users").doc(userId).collection("semesters").doc(semesterId).update({
        courses: firebase.firestore.FieldValue.arrayUnion(course)
    })
    .then(docRef => {
        console.log('[users/semesters course add] Successful! ', docRef);
        return {successful: true, data: docRef};
    })
    .catch(error => {
        console.log('[users/semesters course add] Error occured! ', error);
        return {successful: false, data: error};;
    });

    return addNewSemesterPromise;
}


/**
    @desc fetches the event documents that should be shown in the network event list feed
    @param {userId} - ID of the user fetching documents
    @param {setEventList} - callback to set the events for the network event feed
    @param {setLastVisible} - callback to set the last visbile event fetched
    @param {setRefresh} - callback to hide the Refresh Control component
**/
export function fetchSemesters(userId, setSemesters) {

    let initialQuery = firebase.firestore().collection('users').doc(userId).collection('semesters')
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            console.log("[Collection: 'events' Function: fetchSemesters] Documents found!");
            let formattedSemesters = snapshot.docs.map(snap => {
                let data = snap.data();
                data.semesterId = snap.id;

                return data;
            });

            setSemesters(formattedSemesters);
            return {
                successful: true,
                empty: false
            };
        } else {
            console.log("[Collection: 'events' Function: fetchSemesters] No documents found!");
            return {
                successful: true,
                empty: true
            };
        }
    })
    .catch((error) => {
        console.log("[Collection: 'events' Function: fetchSemesters] Error!", error);
        return {
            successful: false,
            error: error
        };
    });

    return initialQuery;
}
