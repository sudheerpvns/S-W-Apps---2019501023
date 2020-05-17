import * as React from 'react';

import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  CheckBox,
  FlatList,
  Button,
  TextInput,
} from 'react-native';



export default class TodoList extends Component {
  state = {
    tasks: [],
    text: '',
    checked: false,
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;
    console.log(this.state);
    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          // console.log(tasks)
          // console.log(text)
          if (tasks.length === 0) {
            return {
              tasks: tasks.concat({ key: tasks.length, text: text }),
              text: '',
            };
          }
          for (let i = 0; i < tasks.length; i++) {
            if (text !== tasks[i].text) {
              return {
                tasks: tasks.concat({ key: tasks.length, text: text }),
                text: '',
              };
            } else {
              alert('Task Exists');
            }
          }
        },

      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
    );
  };
 onChangeCheck() {
   console.log(this.state.checked)
    this.setState(prevState => {let flag = prevState.checked
    console.log(flag)})
    console.log(this.state.checked)
    
    
    console.log(this.state.checked)
}

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}>
        <Text style={styles.welcome}>TODO</Text>
        <Text style={styles.welcome}>TASK MANAGER</Text>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.listItemCont}>
                <CheckBox
                  value={this.state.checked}
                  onChange={() => this.onChangeCheck()}
                />
                <Text style={styles.listItem}>{item.text}</Text>
                <Button title="X" onPress={() => this.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>
          )}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
          returnKeyType="done"
          returnKeyLabel="done"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: 10,
    paddingTop: 40,
  },
  list: {
    width: '100%',
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 20,
    color: '#FF6347',
  },
  hr: {
    height: 1,
    backgroundColor: 'gray',
  },
  listItemCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  welcome: {
    paddingTop: 50,
    fontSize: 25,
    // fontWeight: 'bold',
    color: '#0000CD',
  },
});

AppRegistry.registerComponent('TodoList', () => TodoList);
