import React from 'react';
import { View } from 'react-native';

interface MySpacerProps {
  vertical?: number;
  horizontal?: number;
}

function MySpacer({ vertical, horizontal }: MySpacerProps) {
  return <View style={{ width: '100%', marginVertical: vertical, marginHorizontal: horizontal }} />;
}

export default MySpacer;
