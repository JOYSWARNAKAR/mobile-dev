# React Navigation App

A mobile application built with React Native and Expo demonstrating navigation between multiple screens using React Navigation.

## Features

- **Native Stack Navigation** - Seamless screen transitions using React Navigation's native stack navigator
- **Multiple Screens** - Home, Details, and Profile screens with navigation between them
- **Cross-Platform** - Runs on iOS, Android, and Web via Expo

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (for development)

## Installation

### 1. Install Expo CLI globally (if not already installed):
```bash
npm install -g expo-cli
```

### 2. Clone or navigate to the project directory:
```bash
cd React-navigation
```

### 3. Install project dependencies:
```bash
npm install
```

### 4. Start the development server:
```bash
npm start
```

### 5. Install Expo Go app (for testing on physical devices):
- **iOS**: Download from [Apple App Store](https://apps.apple.com/us/app/expo-go/id982107779)
- **Android**: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Running the App

### Development Server
```bash
npm start
```

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## Project Structure

```
src/
├── screens/
│   ├── HomeScreen.tsx      - Home page
│   ├── DetailScreen.tsx    - Details page
│   └── ProfileScreen.tsx   - Profile page
└── navigator/              - Navigation configuration

App.tsx        - Main app component with navigation setup
```

## Stack

- **React Native** 0.81.5
- **React** 19.1.0
- **Expo** ~54.0.33
- **React Navigation** 7.x
- **TypeScript** ~5.9.2

## Learn More

- [React Navigation Docs](https://reactnavigation.org)
- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
