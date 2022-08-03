import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';

import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/useForm';
import styles from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={{
              ...customStyles.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholderTextColor={dividerColor}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />

          <TextInput
            style={{
              ...customStyles.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholderTextColor={dividerColor}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />

          <TextInput
            style={{
              ...customStyles.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholderTextColor={dividerColor}
            placeholder="Ingrese su teléfono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />

          <View style={customStyles.switchRow}>
            <Text style={{...customStyles.switchText, color: colors.text}}>
              isSuscribed:
            </Text>
            <CustomSwitch
              isOn={form.isSuscribed}
              onChange={value => onChange(value, 'isSuscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const customStyles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 25,
  },
});
