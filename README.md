# Shopical
Environmental activists and researchers identified hundreds of chemicals and compounds that as harmful to our environment. The Shopical mobile app provides a way for consumers to check the sustainability of ingredients in beauty and food products in real-time. Users can scan the ingredients list of a product and instantly receive information about the environmentally harmful chemicals present. We hope that this will empower individuals to make purchases that are better for the environment.

Created for 2020 IBM Intern Hackathon

Contributors: Tim Baer, Jillian Quinn, Jillian Smith, Kiersten Stokes, Paramjot Singh

## Awards
- Won Second Place in Climate Change Track
- 1 of 9 teams to present in the final round out of all 126 Hackathon Projects 

## Presentation/Demo

[Shopical Tech Talk Presentation](https://docs.google.com/presentation/d/1CW5WOTQiPHPXGwLONWaUFSEp0OAMON2r1Bjp6r1b-pk/edit?usp=sharing)

[Shopical Demo Video](https://github.com/JillianQuinn/Shopical/blob/master/ShopicalDemo.mov)

* Watch the demo video above to see the working application. When the user is at a store aisle and finds a product that they want to know more about, they can take out their phone and open the app. From the homescreen, they will click "Go to Camera" and it will navigate to the camera screen where they can take a photo of the product's ingredient list. The user then can then see the color-coded list of matching ingredients in descending order of harmfulness to the environment. The red ingredients are the most toxic and the green are fairly safe for the environment. The user can click on each ingredient to view a short description of its' effect on the environment. You will also see that Shopical works on food items. In this demo, we scan a can of chilli and see that items, such as beef, filter to the top for their high co2 emissions. In a matter of seconds, the user has the tools they need to make the most sustainable choice! 

[Shopical Initial Presentation Video](https://drive.google.com/drive/folders/1-t78_cx31rg3GRFZW2BSLifxNPXRNkp5)


## Technical Architecture
When creating  Shopical, we wanted to focus on accessibility. Therefore, we built Shopical using React Native so that it can be used on as many devices as possible. The physical components needed are just the user, a phone with Shopical downloaded, and the ingredient list of the product. As seen in the demo video, the user takes a photo of the ingredient list, and that photo gets sent in base64 encoding format to the Nodejs backend server currently deployed on the IBM cloud. The picture is then POST'ed to an optical character recognition API to extract the text from the photo. Once we parse the API response, we use SQL statements to query the ingredients against an IBM DB2 database instance that we created that stores information on as many ingredients we could find. To create the database, we did extensive research on product manufacturers, stores, and the Environmental Working Group and compiled it all into one encompassing database. Once the ingredients are matched, they are returned back to the front end with its harmfulness level and description, which then gets displayed to the user. 
![Technical Architecture](https://github.com/JillianQuinn/Shopical/blob/master/TechnicalArchitecture.png)


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
