import { StatusBar } from 'expo-status-bar';
import { Badge, Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Text>An app made by </Text>
        <Badge colorScheme="info">augsync</Badge>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
