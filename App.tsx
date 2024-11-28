import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {TrafficLight} from './trafficLight';

const App = () => {

  // TODO: we are going to remove these dummy data when implementing the state machine
  const state= {
    value: 'green',
    context: {
      timesBroken: 0,
    },
    matches: (input: string) => input  === 'repair',
  }

  // TODO: we are going to remove these dummy data when implementing the state machine
  const send = (input: {type: string}) => {
    if (input.type === 'SWITCH') {
      state.value = 'yellow';
    } else if (input.type === 'REPAIR') {
      state.context.timesBroken += 1;
    } else if (input.type === 'RESTART') {
      state.value = 'green';
  }
}

  return (
    <View style={styles.parentContainer}>
      {/* Traffic Light component */}
      <TrafficLight currentLight={state.value as string} />
      {/* Information panel */}
      <View style={styles.informationContainer}>
        <Text style={styles.informationLabel}>
          Current State: {String(state.value)}
        </Text>
        <Text style={styles.informationLabel}>
          Repair Mode: {state.matches('repair') ? 'ON' : 'OFF'}
        </Text>
        <Text style={styles.informationLabel}>
          Times Broken: {state.context.timesBroken}
        </Text>
      </View>
      {/* switch panel */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => send({type: 'SWITCH'})}
          style={styles.button}>
          <Text>Switch Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => send({type: 'REPAIR'})}
          style={styles.button}>
          <Text>Repair Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => send({type: 'RESTART'})}
          style={styles.button}>
          <Text>Restart Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  informationLabel: {
    fontSize: 20,
    color: '#ccd2d9',
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#516b87',
    padding: 15,
  },
});
