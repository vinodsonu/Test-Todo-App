import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View style={styles.Footer}>
      <Text style={styles.text}>App by @Vinod</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
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
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Footer;
