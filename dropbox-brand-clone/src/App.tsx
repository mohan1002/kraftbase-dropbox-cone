import React from 'react';
import Framework from './components/Framework';
import VoiceTone from './components/VoiceTone';
import Logo from './components/Logo';
import Typography from './components/Typography';
import Iconography from './components/Iconography';
import Color from './components/Color';
import Imagery from './components/Imagery';
import Motion from './components/Motion';

const App: React.FC = () => {
  return (
    <Framework>
      <Logo />
      <Typography />
      <Color />
      <Iconography />
      <Imagery />
      <VoiceTone />
      <Motion />
    </Framework>
  );
};

export default App;