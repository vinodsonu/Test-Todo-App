import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import ChosenTask from './src/screens/ChosenTask';
import Home from './src/screens/Home';
// import requestUserPermission from './src/utils/notificationService';

const Stack = createNativeStackNavigator();

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  const GlobalState = {
    todoList,
    setTodoList,
    task,
    setTask,
    chosenTask,
    setChosenTask,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
        <Stack.Screen name="ChosenTask" options={{headerShown: false}}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
