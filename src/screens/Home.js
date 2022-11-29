import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Home = ({navigation, GlobalState}) => {
  const {todoList, setTodoList, task, setTask} = GlobalState;

  const handleSaveTask = () => {
    const index = todoList.length + 1;
    if (task.length) {
      setTodoList(prevTodoList => [...prevTodoList, {id: index, task: task}]);
      setTask('');
    }
  };

  // const handleChooseTask = item => {
  //   setChosenTask(item);
  //   navigation.navigate('ChosenTask');
  // };

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Enter task..."
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSaveTask()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <FlatList
          data={todoList}
          renderItem={eachItem => {
            return (
              <TouchableOpacity style={styles.task}>
                <Text>{eachItem.item.task}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {flex: 8, backgroundColor: '#15151505', width: '100%'},
  task: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    backgroundColor: '#d4d3cf',
  },
  textInput: {
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: '#e6e8e6',
    borderRadius: 8,
  },
  button: {
    padding: 15,
    margin: 10,
    marginTop: 2,
    borderWidth: 1,
    backgroundColor: '#141414',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
export default Home;
