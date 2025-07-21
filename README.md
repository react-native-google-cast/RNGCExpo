# RNGC Expo Example

> This is an example of integrating https://github.com/react-native-google-cast/react-native-google-cast in Expo 53.

This example was created using the following steps:

1. `npx create-expo-app@latest --template blank-typescript`

2. `cd RNGCExpo`

3. `npm i react-native-google-cast`

4. `npx expo install expo-build-properties expo-dev-client`

5. Add to `app.json`:

   ```json
   {
     "expo": {
       "plugins": [
         "react-native-google-cast",
         ["expo-build-properties", { "ios": { "deploymentTarget": "15.1" } }]
       ]
     }
   }
   ```

6. Add to `App.tsx`

   ```tsx
   import { CastButton, useCastState } from "react-native-google-cast";

   <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />;
   ```

7. `npm run android` or `npm run ios` to build and run the app.
