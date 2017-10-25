import React from 'react';
import { ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Box from './Box';

// this is just for cleanup the imports in classes

export const ScrollBox = props => <Box as={ScrollView} {...props} />;
export const SwiperBox = props => <Box as={Swiper} {...props} />;
