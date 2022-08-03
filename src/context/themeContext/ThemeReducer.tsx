import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'light_theme'} | {type: 'dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#084FA6',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255,0.6)',
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'light_theme':
      return {...lightTheme};
    case 'dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
