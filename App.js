import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/*import { NavigationContainer } from '@react-navigation/native';*/
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Facebook from './screens/fb'; 
import Instagram from './screens/in'; 



export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const tabNavigator = createBottomTabNavigator({

  Facebook: Facebook, 
  Instagram: Instagram

},

{

  defaultNavigationOptions: ({navigation}) => ({

    tabBarIcon: ({}) => {

      const rootName = navigation.state.rootName
      if(rootName === "Facebook" ){

        return (<Text  styles = {{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>My Facebook Page </Text>/*<Image source = {require('./assets/face-book-logo.png')} styles = {{width: 40, height: 40}}/>*/)

      }
      else if(rootName === "Instagram" ){

        return (<Text  styles = {{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}} >My Instagram Page</Text> /*<Image source = {require('./assets/insta-logo.png')} styles = {{width: 40, height: 40}}//>*/)

      }

    }

})


})

const AppContainer = createAppContainer(tabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
