import React, {useContext} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setData('');
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hello there! ');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={30}
          progressBackgroundColor={colors.primary}
          colors={[colors.text]}
          tintColor={colors.primary}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
