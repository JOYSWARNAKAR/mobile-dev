const linking: any = {
  prefixes: ['foodapp://'],

  config: {
    screens: {
      MainApp: {
        screens: {
          Home: {
            screens: {
              RestaurantDetail:
                'restaurant/:id',
            },
          },
        },
      },
    },
  },
};

export default linking;