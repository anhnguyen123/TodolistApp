import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class TaskItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props);
    // alert(this.props.completed);
   // console.log(this.props.taskId % 2);
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            //call this action in Container
          }}
          style={styles.btn}></TouchableOpacity>
        <View
          style={[
            styles.container,
            {backgroundColor: this.props.taskId % 2 == 0 ? 'green' : 'yellow'},
          ]}>
          <Text style={{color: 'white'}}>{this.props.taskId}. </Text>
          <Text style={{color: 'white'}}>{this.props.taskName}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});
