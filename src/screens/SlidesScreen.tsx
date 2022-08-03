/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import {useAnimation} from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Carousel
          // ref={c => {
          //   this._carousel = c;
          // }}
          data={items}
          renderItem={({item}) => renderItem(item)}
          width={screenWidth}
          loop={false}
          onSnapToItem={index => {
            if (index === items.length - 1) {
              isVisible.current = true;
              fadeIn(500);
            }
            setActiveIndex(index);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          height: 80,
        }}>
        <PaginationDot
          activeDotColor="#5856D6"
          curPage={activeIndex}
          maxPage={items.length}
        />
      </View>

      <Animated.View
        style={{
          alignItems: 'flex-end',
          marginHorizontal: 20,
          opacity,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#5856D6',
            width: 140,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.8}
          onPress={() => {
            if (isVisible.current) {
              navigation.navigate('HomeScreen');
            }
          }}>
          <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
          <Icon name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
  },
});
