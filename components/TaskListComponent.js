import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export class TaskListComponent extends Component {
    render() {
        return (
            <FlatList data={this.props.tasks}
            renderItem={({item,index})=>{
                return (

                );
            }}
            >

            </FlatList>
        )
    }
}

export default TaskListComponent
