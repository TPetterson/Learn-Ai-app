import React from 'react';
import { View } from 'react-native';
import { Box, Text, ScrollBox, Button } from '../components';
import { Link } from 'react-router-native';

type PageProps = {
  articleTitle: string,
  subtitle: string,
  content: string,
  lastPage: boolean
};

const Page = ({ articleTitle, subtitle, content, lastPage }: PageProps) => (
  <ScrollBox
    flex={1}
    showsVerticalScrollIndicator={false}
    margin={0.2}
    borderRadius={10}>
    <ScrollBox borderRadius={10} flex={1}>
      <Box justifyContent={'center'} alignItems={'center'}>
        <Text size={5} paddingBottom={1} paddingTop={2} color={'white'}>
          {subtitle}
        </Text>
      </Box>
      <Box backgroundColor={'white'} borderRadius={10} padding={1}>
        <Text size={2}>{content}</Text>
      </Box>
      <Box flex={1} alignItems={'center'} marginTop={0.1}>
        <Text size={1} italic color={'white'}>
          {articleTitle}
        </Text>
      </Box>
    </ScrollBox>
    <Box height={6} alignItems={'center'} justifyContent={'space-around'}>
      {lastPage ? (
        <Button as={Link} to={'/'}>
          <View>
            <Text size={3} color={'white'}>
              Back to home
            </Text>
          </View>
        </Button>
      ) : (
        <Button>
          <Text size={3} color={'white'}>
            Swipe to next page >
          </Text>
        </Button>
      )}
    </Box>
  </ScrollBox>
);

export default Page;
