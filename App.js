import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{key: 1, name: 'create an app', points: 20, created: new Date(), completed: false}]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Get Stuff Done ✔︎</Text>
        <FlatList
          data={this.state.tasks.filter(task => !task.completed)}
          renderItem={({ item }) => <Text>Task: {item.name} Points: {item.points}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
