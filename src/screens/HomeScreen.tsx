import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data/menuItems';
import globalStyles from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
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
});
