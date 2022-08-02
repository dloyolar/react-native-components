import React from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import {useState} from 'react';

export const PullToRefreshScreen = () => {
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
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          tintColor="red"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
