var firebase = require('firebase/app');
require('firebase/firestore');


/**
    @desc fetches a user document from the users collection
    @param {userId} - ID of the user in the member document
    @param {userCallback} - callback that sets the user document
    @return {Promise} - promise returned indicating if user found or not and if any errors occured
**/
export function fetchUserById(userId) {
    const userQuery = firebase.firestore().collection("users").doc(userId).get()
    .then(snapshot => {
        if(snapshot.exists) {
            var user = snapshot.data();
            user.userId = userId;

            console.log("[Collection: 'users' Function: fetchUserById] Found user!");
            return {
                exists: true,
                successful: true,
                data: user
            }

        } else {

            console.log("[Collection: 'users' Function: fetchUserById] No user found!");
            return {
                exists: false,
                successful: true,
                data: null
            }
        }
    })
    .catch(error => {
        console.warn("[Collection: 'users' Function: fetchUserById] Error!", error);
        return {
            exists: false,
            successful: false,
            data: null
        }
    });

    return userQuery;
}

/**
    @desc adds a new user to the users collection
    @param {userId} - ID of the user in the member document
    @param {userCallback} - callback that sets the user document
    @return {Promise} - promise returned indicating if user found or not and if any errors occured
**/
export function addNewUser(userId, newUser) {
    const userCreateRef = firebase.firestore().collection("users").doc(userId).set(newUser)
    .then(response => {
        console.log("[Collection: 'users' Function: addNewUser] Successful!");
        return {
            successful: true
        };
    })
    .catch(error => {
        console.log("[Collection: 'users' Function: addNewUser] Error!");
        return {
            successful: false,
            error: error
        };
    });

    return userCreateRef;
}

/**
    @desc adds a new user to the users collection
    @param {userId} - ID of the user in the member document
    @param {userCallback} - callback that sets the user document
    @return {Promise} - promise returned indicating if user found or not and if any errors occured
**/
export function updateDisplayName(userId, displayName) {
    const userCreateRef = firebase.firestore().collection("users").doc(userId).update({
        name: displayName
    })
    .then(response => {
        console.log("[Collection: 'users' Function: updateDisplayName] Successful!");
        return {
            successful: true
        };
    })
    .catch(error => {
        console.log("[Collection: 'users' Function: updateDisplayName] Error!");
        return {
            successful: false,
            error: error
        };
    });

    return userCreateRef;
}
