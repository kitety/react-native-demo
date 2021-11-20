/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView, // 安全区域 刘海屏
  ScrollView, // 滚动区域
  StatusBar, // 状态栏
  StyleSheet, // 样式
  Text, // 文本
  useColorScheme, // 主题
  View, // 块 视图
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handlePress = e => {
    console.log('e: ', e);
    alert('你好世界');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello</Text>
        </View>
        <View style={styles.center}>
          <Button title="确定" color="#ff3300" onPress={handlePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default App;
