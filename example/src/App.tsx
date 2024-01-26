import * as React from 'react';
import { useEffect, useState } from 'react';

import { Button, StyleSheet, View } from 'react-native';
import { NumericLedDisplay } from 'react-native-led-display';

let interval: NodeJS.Timeout;

export default function App() {
  const [second, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      setTime(0);
      if (interval) clearInterval(interval);
    } else {
      interval = setInterval(() => {
        if (second > 8) {
          setTime(() => 0);
        } else {
          setTime((currentSecond) => currentSecond + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [started, second]);

  return (
    <View style={styles.container}>
      <Button
        title={started ? 'Stop' : 'Start'}
        onPress={() => setStarted((started) => !started)}
      />
      <NumericLedDisplay width={200} digite={second} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
