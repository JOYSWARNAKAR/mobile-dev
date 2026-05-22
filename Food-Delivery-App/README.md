# Food Delivery App

A React Native food delivery application built with Expo and TypeScript, featuring user authentication, restaurant browsing, cart management, and order tracking.

## Features

- **User Authentication** - Secure login and onboarding flow
- **Restaurant Browsing** - Browse restaurants and view details
- **Food Search** - Search for restaurants and dishes
- **Shopping Cart** - Add/remove items and manage orders
- **Order Management** - Track current and past orders
- **User Profile** - Manage account settings and preferences
- **Bottom Tab Navigation** - Easy access to Home, Orders, and Profile
- **Drawer Navigation** - Additional menu options and help

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development and deployment platform
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library (Native Stack, Bottom Tabs, Drawer)
- **AsyncStorage** - Local data persistence
- **Context API** - State management for authentication

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Food-Delivery-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Running on Different Platforms

- **iOS:**
  ```bash
  npm run ios
  ```

- **Android:**
  ```bash
  npm run android
  ```

- **Web:**
  ```bash
  npm run web
  ```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # Authentication context
├── data/             # Mock data (restaurants)
├── navigation/       # Navigation setup and screens
│   ├── AuthNavigator    # Authentication flow
│   ├── BottomTabs       # Tab navigation
│   ├── HomeStack        # Home screen stack
│   ├── ProfileDrawer    # Drawer navigation
│   └── RootNavigator    # App root navigation
├── screens/          # All application screens
│   ├── LoginScreen
│   ├── OnboardingScreen
│   ├── HomeScreen
│   ├── SearchScreen
│   ├── RestaurantDetailScreen
│   ├── CartScreen
│   ├── MyOrdersScreen
│   ├── ProfileScreen
│   ├── SettingsScreen
│   └── HelpScreen
└── types/           # TypeScript type definitions
```

## Development

- Uses **Babel** for JavaScript transpilation
- **TypeScript** for type safety
- React Navigation for seamless navigation between screens


