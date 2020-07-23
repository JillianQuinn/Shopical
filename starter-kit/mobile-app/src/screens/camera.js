import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Config from 'react-native-config';
import RNFS from 'react-native-fs';


//let serverUrl = Config.STARTER_KIT_SERVER_URL;
let serverUrl = 'http://192.168.1.99:3000';
//let serverUrl = 'http://192.168.1.195:3000';
//serverUrl = 'http://localhost:3000';
if (serverUrl.endsWith('/')) {
  serverUrl = serverUrl.slice(0, -1)
}


const sendData = async function(photouri) {
    var data = {'photo': `${photouri}`};

    return fetch(`${serverUrl}/api/ocr`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response.json()).then((data) => {
        //console.log(data["ParsedResults"][0].ParsedText.replace(/\n/g, " ").toLowerCase());
        return data["ParsedResults"][0].ParsedText.replace(/\n/g, " ").toLowerCase();
    })
};

// this is taken from https://react-native-community.github.io/react-native-camera/docs/rncamera
class CameraApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      const filepath = data.uri.split('//')[1];
      const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
      var ingredients = await sendData(imageUriBase64);
      console.log(ingredients)
      this.props.navigation.navigate('Harmful Ingredients', {ingredients:ingredients})
    }
  };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      }
});

export default CameraApp 
