export const fonts = {
  header: 'Acre',
  body: 'Acre',
}

export const fontSizes = {
  small: '0.75rem',
  regular: '1.0rem',
  medium: '1.5rem',
  large: '2.25rem',
}

export const spaces = {
  narrow: '0.75rem',
  regular: '1rem',
  wide: '1.45rem',
  spacer: '7rem',
}

export const screenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktopS: '1920px',
  desktop: '2560px',
}

export const colors = {
  primary: '#ff4500',
  background: '#1a1a1a',
  backgroundTransp: 'rgba(26, 26, 26, 0.5)',
  text: '#ccc',
}

export enum ThemeNames {
  dark = 'dark',
  light = 'light',
}

export type ThemeType = {
  name: ThemeNames
  primary: string
  background: string
  text: string
}

export type ThemesType = ThemeType[]

export const dark = {
  name: ThemeNames.dark,
  primary: '#ff4500',
  background: '#000',
  text: '#eee',
}

export const light = {
  name: ThemeNames.light,
  primary: '#ff4500',
  background: '#eee',
  text: '#1a1a1a',
}

export const themes: ThemesType = [light, dark]
