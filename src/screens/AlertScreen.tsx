import React from 'react';
import {View, Button, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import styles from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Titulo', 'Este es el mensaje de la alerta', [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'destructive',
      },
      {
        text: 'OK',
        onPress: () => Alert.alert('OK Pressed'),
      },
    ]);
  };

  const showPrompt = () => {
    Alert.prompt(
      '¿Estás Seguro?',
      'Ingresa un mensaje',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: value => Alert.alert(`Confirmaste ingresando: ${value}`),
        },
      ],
      'plain-text',
      '',
      'number-pad',
    );
  };

  const showLibraryPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => Alert.alert('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt (Solo iOS)" onPress={showPrompt} />
      <Button
        title="Mostrar Prompt de una Libreria"
        onPress={showLibraryPrompt}
      />
    </View>
  );
};
