# Shopical
Environmental activists and researchers identified hundreds of chemicals and compounds that as harmful to our environment. The Shopical mobile app provides a way for consumers to check the sustainability of ingredients in beauty and food products in real-time. Users can scan the ingredients list of a product and instantly receive information about the environmentally harmful chemicals present. We hope that this will empower individuals to make purchases that are better for the environment.

[Shopical Tech Talk Presentation](https://docs.google.com/presentation/d/1CW5WOTQiPHPXGwLONWaUFSEp0OAMON2r1Bjp6r1b-pk/edit?usp=sharing)

[Shopical description](https://ibm.box.com/s/nhg7sb8o8wdp5vygpb1x7htdm7mpx61k)

[Shopical Initial video](https://drive.google.com/drive/folders/1-t78_cx31rg3GRFZW2BSLifxNPXRNkp5)

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
