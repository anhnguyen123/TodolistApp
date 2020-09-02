import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const TaskItemComponent = () => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
                //call this action in Container
            }} style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>

            </TouchableOpacity>
            <Text style={{ margin: 20, color: this.props.completed ? 'darkgreen' : 'black' }}>{this.props.taskName}</Text>
        </View>
    )
}

export default TaskItemComponent
