# RNGC Expo Example

> This is an example of integrating https://github.com/react-native-google-cast/react-native-google-cast in Expo 47.

This example was created using the following steps:

1. `npm i -g expo-cli`

2. `expo init RNGCExpo`

3. `cd RNGCExpo`

4. `yarn add react-native-google-cast`

5. Add to `app.json`:

   ```json
   {
     "expo": {
       "plugins": ["@config-plugins/react-native-google-cast"]
     }
   }
   ```

6. Add to `App.tsx`

   ```tsx
   import { CastButton, useCastState } from "react-native-google-cast";

   <CastButton style={{ tintColor: "black", height: 48, width: 48 }} />;
   ```

7. `yarn android` or `yarn ios`\* to build and run the app.

   \* If you're using M1/ARM Macs, update the generated `ios/Podfile` and rerun `pod install` as described in https://react-native-google-cast.github.io/docs/getting-started/installation.html#ios

Additionally, I built the app using EAS.

1. `npm i -g eas-cli`

2. `eas login`

3. Create `eas.json`:

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

4. `eas build -p android --profile preview`

You can download the APK from https://expo.dev/artifacts/eas/2wNCoXKb8eeMiRMuobGoRC.apk
