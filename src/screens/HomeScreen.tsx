import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import globalStyles from '../theme/appTheme';

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, ...styles.renderListHeader}}>
        <Text style={globalStyles.title}>Opciones del menu</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    ...globalStyles.globalMargin,
  },
  renderListHeader: {
    marginBottom: 20,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
