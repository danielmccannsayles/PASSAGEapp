import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableNativeFeedback, TextPropTypes } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TitleButton({navigation, title, description, destination, color}){
  return(
    <View style={styles.coolbutton}>
    <TouchableNativeFeedback 
      background={TouchableNativeFeedback.Ripple('#fffff', true)} 
      style={{width: "100%", height: "100%"}}
      onPress={()=>navigation.navigate(destination,{
        itemId: 400,
        blahBlah: 'heyy',
      }
      )}
      >
        <View style={styles.coolbuttonchild} backgroundColor={color}> 
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.text}> {description} </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.hometitle}>App Name</Text>
      </View>
      <View style={styles.containerTwo}>
        <TitleButton navigation={navigation} title="Section 1 Title"
          description="This is a description of Section 1" 
          destination="Profile"
          color="#F2A633"
          > 
        </TitleButton>
        <TitleButton navigation={navigation} title="Section 2 Title"
          description="This is a description of Section 2"
          destination="Profile"
          color="#3FD34D"
          > 
        </TitleButton>
        <TitleButton navigation={navigation} title="Section 3 Title"
          description="This is a description of Section 3"
          destination="Profile"
          color="#E569CA"
          > 
        </TitleButton>
      </View>
    </View>
  );
}

function ProfileScreen({route, navigation}){
  const {itemId} = route.params;
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Yo yo this the profile</Text>
      <Text style={styles.text}> Item ID: {itemId}</Text>
      <Text style={styles.text}>Blah: {route.params.blahBlah} </Text>
      <Button title ="Go Back" onPress={()=>navigation.goBack()}/>
      <Button 
      title="Go to Profile ... again"
      onPress={()=>navigation.navigate('Profile',{
        itemId: Math.floor(Math.random() * 100)
      })
      }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}
          initialParams={{blahBlah:40}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#d6d6d6',
    alignItems: 'center',
    justifyContent: 'space-around',
    height:"100%",
    width:"100%",
  },
  containerTwo: {
    flex:2,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
    width:"100%",
  },
  text: {
    fontSize: 16,
    color:'whitesmoke',
    fontStyle: 'italic',
  },
  button: {
    color:'green',
  },
  title: {
    fontSize: 30,
    color:'whitesmoke',
  },
  hometitle: {
    fontSize: 50,
    color: '#404040',
    alignItems :'center',
    justifyContent: 'center',
  },
  coolbutton: {
    alignItems:'center',
    borderRadius: 10,
    width:"75%",
    height:"20%",
    overflow:'hidden',
  },
  coolbuttonchild: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    width:"100%",
    height:"100%",
  },
});

