# RNGC Expo Example

> This is an example of integrating https://github.com/react-native-google-cast/react-native-google-cast in Expo 44.

This example was created using the following steps:

1. `npm i -g expo-cli`
2. `expo init RNGCExpo`
3. `cd RNGCExpo`
4. `yarn add react-native-google-cast @config-plugins/react-native-google-cast`
5. Add to `app.json`:
   ```
   {
     "expo": {
      "plugins": ["@config-plugins/react-native-google-cast"]
     }
   }
   ```
6. `expo run:android` or `expo run:ios` to build and run the app.

Additionally, I built the app using EAS.

7. `npm i -g eas-cli`
8. `eas login`
9. Create `eas.json`:
   ```json
   {
     "build": {
       "preview": {
         "android": {
           "buildType": "apk"
         }
       }
     }
   }
   ```
10. `eas build -p android --profile preview`
