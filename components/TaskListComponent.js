import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'

import TaskItemContainer from '../containers/TaskItemContainer';

export class TaskListComponent extends Component {
    constructor(props) {
        super(props);       
    }
    
    render() {
        //alert(`state send to task list = ${JSON.stringify(this.props.tasks)}`)
        return (
           
            <FlatList data={this.props.tasks}
                renderItem={({ item, index }) => {
                    
                    return (
                        <TaskItemContainer {...item} ></TaskItemContainer>
                    );
                }}
                keyExtractor={(item, index) => item.taskId.toString()}
                key={(item)=>item.taskId}
                
            >

            </FlatList>
        )
    }
}

export default TaskListComponent
