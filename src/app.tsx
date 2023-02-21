import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Button from './ui/button';
import OTPInput from './ui/otp-input';
import Typography from './ui/typography';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Typography size="xl" weight="extrabold" transform="uppercase">
        App
      </Typography>
      <Button variant="outlined" color="blue">
        <Typography color="blue">Application Button</Typography>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
