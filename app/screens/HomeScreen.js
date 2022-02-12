import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, ScrollView } from 'react-native';

function WelcomeScreen(props) {
      const [pressedCount, setPressedCount] = useState(0);
      const [name, setName] = useState('');
      return (
    
    <View style={styles.container}>


      <Button style={styles.button}
          title='Login'
          onPress={() => setPressedCount(pressedCount + 1)}
      />

      <StatusBar style="auto" />
      <View style={{ height: 300, backgroundColor: '#e5e5e5' }}>
      {/* This is our scrollable area */}
      <ScrollView vertical>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Box color='#464d77' />
        <Box color='#36827f' />
        <Box color='#f9db6d' />
      </View>
      </ScrollView>

      {}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Box = (props) => (
  // Move a box `View` component here
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);



export default WelcomeScreen;