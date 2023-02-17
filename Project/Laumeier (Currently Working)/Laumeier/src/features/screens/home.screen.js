import React, { useCallback } from "react";
// import styled from "styled-components/native";
import { Text, Image, View, SafeAreaView } from "react-native";
// import { SafeArea } from ".../spacer/safe-area.components.js";
// import { RoundedButton } from "../component/utils/RoundedButton"

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
        source={require("./homeScreenLogo.jpg")}
        style={{ width: '100%', height: undefined, aspectRatio: 1 }}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Free and open daily from 8 am to 30 minutes past sunset</Text>
        <Text>The Aronson Fine Arts Center is open Thursday - Sunday, with the exception of during private events</Text>
        <Text>Restrooms are open in the Way Field and Carriage House</Text>
        <Text>LAUMEIER SCULPTURE PARK / ENGAGING THE COMMUNITY THROUGH ART AND NATURE</Text>
        <Text>Please visit our COVID safety page for the most up-to-date information on Laumeier's COVID-19 health and safety protocols.</Text>
      </View>
    </SafeAreaView>
  );
};