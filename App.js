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
  Alert, // 弹出组件
  Image, // 图片
  TouchableOpacity, // 点击事件
  TextInput, // 输入框
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [msg, setMsg] = React.useState('123');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handlePress = e => {
    // console.log('e: ', e);
    alert('你好世界');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>H1212</Text>
        </View>
        <View style={styles.center}>
          <Button color="pink" title="js" onPress={handlePress} />
        </View>
        <View style={styles.center}>
          <Button
            color="pink"
            title="Alert组件的弹出"
            onPress={() => {
              Alert.alert('喜欢你', '真的');
            }}
          />
        </View>
        <View style={styles.center}>
          <Button
            color="pink"
            title="请确认"
            onPress={() => {
              Alert.alert('喜欢你', '真的', [
                {
                  text: '取消',
                  onPress: () => {
                    alert('取消了');
                  },
                },
                {
                  text: '确定',
                  onPress: () => {
                    alert('确定了');
                  },
                },
                {
                  text: '无所谓',
                  onPress: () => {
                    alert('无所谓了');
                  },
                },
              ]);
            }}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('./assets/cat.jpg')}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              alert('点击了图片');
            }}>
            <Image
              style={{width: 375, height: 90}}
              source={{
                uri: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{msg}</Text>
        </View>
        <View>
          <TextInput
            value={msg}
            onChangeText={setMsg}
            style={[styles.row, styles.col]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  col: {flex: 1},
});

export default App;
/**
 * 没有百分比
 * flex
 * 垂直布局
 */
