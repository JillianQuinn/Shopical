# Shopical
Environmental activists and researchers identified hundreds of chemicals and compounds that as harmful to our environment. The Shopical mobile app provides a way for consumers to check the sustainability of ingredients in beauty and food products in real-time. Users can scan the ingredients list of a product and instantly receive information about the environmentally harmful chemicals present. We hope that this will empower individuals to make purchases that are better for the environment.

[See Shopify's description](https://ibm.box.com/s/hijgzvu7mi0mg82ksguczrlw3cjy004d)

[See Shopify's video]()

Created for 2020 IBM Intern Hackathon

Contributors: Tim Baer, Jillian Quinn, Jillian Smith, Kiersten Stokes, Paramjot Singh

## Required Dependencies
### Prerequisites
* Install React Native CLI dependencies.
  * Node.js
  * Watchman
  * **iOS only**
    * Xcode
    * CocoaPods
  * **Android only**
    * Java Development Kit
    * Android Studio - add Android 9 (Pie) SDK & configure ANDROID_HOME
    * Create an Android Virtual Device (AVD) - with Pie image (API Level 28)
* Clone the repository.
* Follow step 4 from [Solution-Starter-Kit-Disasters-2020](https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020) (ignore part about HERE_APIKEY)

### Camera and OCR
* `npm install --save react-native-camera@git+https://git@github.com/react-native-community/react-native-camera.git`
* `npm install react-native-text-detector --save`

### Database Connection
* `npm install ibm_db`
* `export BLUDB_UID=[insert UID]`
* `export BLUDB_PWD=[insert PWD]`

## References
Forked from https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020
