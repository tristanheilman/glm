import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventManager from './components/events/EventManager';
import AddEvent from './components/events/AddEvent';

import AcademicManager from './components/academics/AcademicManager';
import AddCourse from './components/academics/AddCourse';
import AddStudyHours from './components/academics/AddStudyHours';

import MessageBoard from './components/messages/MessageBoard';

import TopNavLabel from './components/glm/TopNavLabel';
import BackButton from './components/glm/BackButton';

const Tab = createBottomTabNavigator();

const EventStack = createStackNavigator();
function HomeNavigator() {
    return (
        <EventStack.Navigator
            initialRouteName="Events">
            <EventStack.Screen
                name="Events"
                component={EventManager}
                options={({ navigation, route }) => ({
                    headerTitle: () => <TopNavLabel text={"Event Manager"}/>
                })}/>
            <EventStack.Screen
                name="AddEvent"
                component={AddEvent}
                options={({ navigation, route }) => ({
                    headerLeft: () => <BackButton navigation={navigation}/>,
                    headerTitle: () => <TopNavLabel text={"Add Event"}/>,
                    headerRight: () => <TopNavLabel text={""}/>
                })}/>
        </EventStack.Navigator>
    )
}

const AcademicStack = createStackNavigator();
function AcademicNavigator() {
    return (
        <AcademicStack.Navigator
            initialRouteName="AcademicManager">
            <AcademicStack.Screen
                name="AcademicManager"
                component={AcademicManager}
                options={({ navigation, route }) => ({
                    headerTitle: () => <TopNavLabel text={"Academic Manager"}/>
                })}/>
            <AcademicStack.Screen
                name="AddCourse"
                component={AddCourse}
                options={({ navigation, route }) => ({
                    headerLeft: () => <BackButton navigation={navigation}/>,
                    headerTitle: () => <TopNavLabel text={"Add Course"}/>,
                    headerRight: () => <TopNavLabel text={""}/>
                })}/>
            <AcademicStack.Screen
                name="AddStudyHours"
                component={AddStudyHours}
                options={({ navigation, route }) => ({
                    headerLeft: () => <BackButton navigation={navigation}/>,
                    headerTitle: () => <TopNavLabel text={"Add Study Hours"}/>,
                    headerRight: () => <TopNavLabel text={""}/>

                })}/>
        </AcademicStack.Navigator>
    )
}

const MessageBoardStack = createStackNavigator();
function MessageBoardNavigator() {
    return (
        <MessageBoardStack.Navigator
            initialRouteName="MessageBoard">
            <MessageBoardStack.Screen
                name="MessageBoard"
                component={MessageBoard}
                options={({ navigation, route }) => ({
                    headerLeft: () => <TopNavLabel text={"Left"}/>,
                    headerTitle: () => <TopNavLabel text={"Title"}/>,
                    headerRight: () => <TopNavLabel text={"Right"}/>
                })}/>
        </MessageBoardStack.Navigator>
    )
}

export default function Navigator() {
    return (
        <Tab.Navigator
            initialRouteName="Events">
            <Tab.Screen
                name="Events"
                component={HomeNavigator}/>
            <Tab.Screen
                name="Academics"
                component={AcademicNavigator}/>
            <Tab.Screen
                name="Message Board"
                component={MessageBoardNavigator}/>
        </Tab.Navigator>
    );
}
//
// function getRouteName(props) {
//   // Access the tab navigator's state using `route.state`
//   console.log("ROUTE: ", props);
//   if(route) {
//       const routeName = route.state
//         ? // Get the currently active route name in the tab navigator
//           route.state.routes[route.state.index].name
//         : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
//           // In our case, it's "Feed" as that's the first screen inside the navigator
//           route.params?.screen || 'Default';
//   }
//
//   return "Default";
// }
