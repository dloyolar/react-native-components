import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.itemSeparator, borderBottomColor: dividerColor}} />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
