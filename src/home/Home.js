import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { State } from '../types';
import { FlatList, View } from 'react-native';
import { Box, Text, SwiperBox, ScrollBox, Button } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-spinkit';
import { Link } from 'react-router-native';
import { fetchArticles } from '../actions/firebaseActions';

const menuTextColor: string = 'decentWhite';
const IconText = props => <Text as={Icon} {...props} />;
const FlatListBox = props => <Box as={FlatList} {...props} />;
const SpinnerBox = props => <Box as={Spinner} {...props} />;

type HomeProps = {
  data: array,
  success: string,
  fetchRequested: typeof fetchRequested,
  changeCurrentlyReading: typeof changeCurrentlyReading
};

const renderItem = (item, changeCurrentlyReading) => {
  const headerColor = 'dev' + (item.id + 1); // fix later
  return (
    <Box
      as={Link}
      to={'/article/' + item.id}
      height={item.pages.lenght + 4}
      borderRadius={10}
      marginVertical={0.1}
      backgroundColor={'decentWhite'}>
      <View>
        <Box
          backgroundColor={'dev' + (item.id + 1)}
          borderTopRightRadius={10}
          borderTopLeftRadius={10}
          padding={0.8}
          paddingBottom={0.4}>
          <Text size={3} bold>
            {item.title}
          </Text>
        </Box>
        <Box
          flex={1}
          padding={0.8}
          paddingTop={0.4}
          borderBottomRightRadius={10}
          borderBottomLeftRadius={10}
          backgroundColor={'gray'}>
          {item.pages.map((page, key) => (
            <Text key={key} size={2}>
              {page.subtitle}
            </Text>
          ))}
        </Box>
      </View>
    </Box>
  );
};

const Home = ({
  data,
  fetchArticles,
  success,
  changeCurrentlyReading
}: HomeProps) => {
  return (
    <ScrollBox
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      borderRadius={10}
      marginHorizontal={0.1}
      showsVerticalScrollIndicator={false}>
      <Box flex={1} justifyContent={'flex-start'}>
        <Text
          size={8}
          bold
          color={'decentWhite'}
          backgroundColor={'transparent'}
          margin={1}
          marginBottom={0.5}>
          Learn AI.
        </Text>
        {success == 'Data fetch succeeded' ? (
          <FlatListBox
            borderRadius={10}
            showsVerticalScrollIndicator={false}
            flex={1}
            data={data.Articles}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => renderItem(item, changeCurrentlyReading)}
          />
        ) : (
          <Box flex={1} alignItems={'flex-start'}>
            <SpinnerBox
              size={80}
              type={'ThreeBounce'}
              color={'#f7f5eee8'}
              marginLeft={1}
            />
          </Box>
        )}
      </Box>
      <Box
        flexDirection={'row'}
        height={2}
        zIndex={100}
        textAlign={'center'}
        justifyContent={'center'}>
        <Button
          onPress={() => fetchArticles()}
          marginVertical={0}
          height={2}
          width={4}>
          <IconText
            name="ios-menu"
            size={5}
            marginBottom={0.5}
            color={'menuColor'}
            backgroundColor={'transparent'}
          />
        </Button>
      </Box>
    </ScrollBox>
  );
};

function mapStateToProps(state) {
  return { data: state.firebase.data, success: state.firebase.success };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
