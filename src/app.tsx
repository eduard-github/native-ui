import React from 'react';
import {SafeAreaView} from 'react-native';
import {theme} from './theme';
import Typography from './ui/typography';
import Button from './ui/button';

function App(): JSX.Element {
  return (
    <SafeAreaView style={theme('flex-1', 'gap-2')}>
      <Typography style={theme('text-lg', 'font-bold')}>App</Typography>
      <Button>
        <Typography>Application Button</Typography>
      </Button>
    </SafeAreaView>
  );
}

export default App;
