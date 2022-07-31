import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../inferfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {icon, name} = menuItem;
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Icon name={icon} size={23} />
        <Text style={styles.itemText}>{name}</Text>
        <View style={styles.spacer} />
        <Icon name="chevron-forward-outline" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  spacer: {
    flex: 1,
  },
});
