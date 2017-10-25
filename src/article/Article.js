import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Box, Text, SwiperBox, Button } from '../components';
import type { State } from '../types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'react-router-native';

const IconText = props => <Text as={Icon} {...props} />;

import Page from './Page';

const menuTextColor: string = 'decentWhite';

type ArticleProps = {
  match: any,
  data: array
};

const Article = ({ match, data }: ArticleProps) => {
  return (
    <Box flex={1} justifyContent={'space-between'}>
      <SwiperBox
        bounces
        loop={false}
        renderPagination={renderPagination}
        borderRadius={10}>
        {data.Articles[match.params.id].pages.map((page, key) => {
          console.log(key);
          console.log(data.Articles[match.params.id].pages.length);
          return (
            <Page
              key={key}
              articleTitle={data.Articles[match.params.id].title}
              subtitle={page.subtitle}
              content={page.content}
              lastPage={
                data.Articles[match.params.id].pages.length - 1 == key
                  ? true
                  : false
              }
            />
          );
        })}
      </SwiperBox>
      <Box
        flexDirection={'row'}
        height={2}
        zIndex={100}
        textAlign={'center'}
        justifyContent={'center'}>
        <Button
          as={Link}
          to={'/'}
          zIndex={100}
          marginVertical={0}
          height={2}
          width={4}>
          <Icon name="ios-menu" size={35} color={'#fff'} />
        </Button>
        <Text
          size={3}
          color={'menuColor'}
          backgroundColor={'transparent'}
          position={'absolute'}
          left={1}
          bottom={0.5}
        />
      </Box>
    </Box>
  );
};

const renderPagination = (index, total, context) => {
  return (
    <Box zIndex={1} position={'absolute'} right={1} bottom={-1.5}>
      <Text color={'menuColor'} size={3}>
        page&nbsp;
        <Text bold color={'menuColor'} size={3}>
          {index + 1}
        </Text>/{total}
      </Text>
    </Box>
  );
};

export default connect((state: State) => ({ data: state.firebase.data }), {})(
  Article
);
