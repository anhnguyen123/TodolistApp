//root component
import React, {Component} from 'react';
import { View, Text, Platform } from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';



export default class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
            <AddContainer/>
            <TaskListContainer/>
        </View >
        )
    }
}

