import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Config from 'react-native-config';
import Spinner from 'react-native-loading-spinner-overlay';
import RNFS from 'react-native-fs';

let serverUrl = 'http://192.168.1.99:3000';
//let serverUrl = 'http://192.168.1.195:3000';
if (serverUrl.endsWith('/')) {
  serverUrl = serverUrl.slice(0, -1)
}

const sendData = async function(photouri) {
  var data = {'photo': `${photouri}`};

  return fetch(`${serverUrl}/api/ocr`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(response => response.json().then((data) => {
    return data;
  }));
};

// from React Native Camera Documentation
class CameraApp extends PureComponent {
  state = {
    spinner: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          overlayColor={'rgba(0, 0, 0, 0.5)'}
          textContent={'One moment while Shopical fetches your ingredients...'}
          textStyle={styles.spinnerTextStyle}
        />
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
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
      const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
      const data = await this.camera.takePictureAsync(options);

      const filepath = data.uri.split('//')[1];
      const imageUriBase64 = await RNFS.readFile(filepath, 'base64');

      this.setState({ spinner: !this.state.spinner });
      var ingredients = await sendData(imageUriBase64);
      this.setState({ spinner: !this.state.spinner });

      this.props.navigation.navigate('Harmful Ingredients',
                      { ingredients:ingredients, photo:data.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#7295df',
  },
  preview: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  capture: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 0,
    margin: 20,
    padding: 15,
    paddingHorizontal: 20,
  },
  spinnerTextStyle: {
    color: 'white',
    padding: 75,
    textAlign: 'center'
  }
});

export default CameraApp 
