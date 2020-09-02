import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import TaskItemContainer from '../containers/TaskItemContainer';

export class TaskListComponent extends Component {
    constructor(props) {
        super(props);       
    }
    render() {
        return (
            <FlatList data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        <TaskItemContainer {...item} ></TaskItemContainer>
                    );
                }}
                keyExtractor={(item, index) => item.taskName}
                
            >

            </FlatList>
        )
    }
}

export default TaskListComponent
