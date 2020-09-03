import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import { addNewTask } from '../actions';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        })
        this.searchInput = React.createRef();
    }
    render() {
        return (
            <View style={styles.header}>
                <TextInput style={styles.textInput} ref={this.searchInput}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={(text) => {
                        this.setState({ newTaskName: text });
                    }}
                    
                />
                <TouchableHighlight style={styles.button}
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) return;
                        //call click event => user "container"
                        //console.log(this.state.newTaskName);
                        this.props.onClickAdd(this.state.newTaskName);
                        this.searchInput.current.clear();
                    }}
                >
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64
    },
    textInput: {
        height: 40,
        width: 200,
        margin: 20,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'
    },
    button: {
        marginRight: 10,
    },
    imgBtn: {
        width: 35, height: 35
    }
})

export default AddComponent
