import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Header;
