import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {theme} from './theme';
import Typography from './ui/typography';
import Button from './ui/button';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.container, theme('flex-1', 'gap-3')]}>
      <Typography style={theme('text-lg', 'font-bold')}>App</Typography>
      <Button>
        <Typography>Application Button</Typography>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
  },
});

export default App;
