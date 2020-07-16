# Shopical

Forked from https://github.com/Call-for-Code/Solution-Starter-Kit-Disasters-2020

Created for 2020 IBM Intern Hackathon

Contributors: Tim Baer, Jillian Quinn, Jillian Smith, Kiersten Stokes, Paramjot Singh

## Required Dependencies
### App-side
Install the following in the **mobile-app* directory with `npm install`.

* `react-native-camera`
	* You may want to use the trunk version here `npm install --save react-native-camera@git+https://git@github.com/react-native-community/react-native-camera.git`
* `react-native-fs`



Don't forget to run `pod install` in the iOS directory for iOS development or to rebuild with `./gradlew build` in the android directory for android development.

### Server-side
Install the following in the **server-app* directory with `npm install`.

* `node-tesseract-ocr`

	* Also run `brew install tesseract`

* `react-native-text-detector`
* `atob`
* `ibm_db`