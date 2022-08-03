/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import styles from '../theme/appTheme';

interface Data {
  title: string;
  data: string[];
}

const data: Data[] = [
  {
    title: 'Main dishes',
    data: [
      'Pizza',
      'Burger',
      'Risotto',
      'Pizza',
      'Burger',
      'Risotto',
      'Pizza',
      'Burger',
      'Risotto',
    ],
  },
  {
    title: 'Sides',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
    ],
  },
  {
    title: 'Drinks',
    data: [
      'Water',
      'Coke',
      'Beer',
      'Water',
      'Coke',
      'Beer',
      'Water',
      'Coke',
      'Beer',
    ],
  },
  {
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
    ],
  },
];

export const CustomSectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de secciones ' + data.length} />
          </View>
        )}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.title} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
