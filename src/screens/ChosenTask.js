import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ChosenTask = ({navigation, GlobalState}) => {
  const {chosenTask} = GlobalState;

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <Text>{chosenTask.item.task}</Text>
      </View>
      <Footer navigation={navigation} />
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
  body: {
    flex: 8,
    backgroundColor: '#14141405',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ChosenTask;
