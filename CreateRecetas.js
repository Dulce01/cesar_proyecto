import React, { Component } from 'react';
import {  
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
//import DropDownPicker from "react-native-dropdown-picker";

//import * as SplashScreen from 'expo-splash-screen';
//import * as Font from "expo-font";

//SplashScreen.preventAutoHideAsync();

let customFonts = {
 "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class CreateRecetas extends Component {
  render() {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo2.jpg")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Nueva Receta</Text>
          </View>
        </View>
        <ScrollView>
              <TextInput
                style={styles.inputFont}
                onChangeText={(title) => this.setState({ title })}
                placeholder={"Título"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(description) => this.setState({ description })}
                placeholder={"Ingredientes "}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(story) => this.setState({ story })}
                placeholder={"Proceso"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

             
              <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addStory()}
                  title="Enviar"
                  color="#841584"
                />
              </View>
            </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212F3C",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(45),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(23),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    marginTop: RFValue(60),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
})

