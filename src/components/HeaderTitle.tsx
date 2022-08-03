import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

import globalStyles from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, ...styles.renderListHeader}}>
      <Text style={{...globalStyles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  renderListHeader: {
    marginBottom: 20,
  },
});
