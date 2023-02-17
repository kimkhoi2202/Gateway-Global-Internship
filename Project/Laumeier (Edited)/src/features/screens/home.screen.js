import React from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { colors } from "../../infrastructure/theme/colors.js";
import { fonts } from "../../infrastructure/theme/fonts";
// import { SafeArea } from ".../spacer/safe-area.components.js";
// import styled from "styled-components/native";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("./homeScreenLogo.jpg")}
          style={{ width: "100%", height: undefined, aspectRatio: 1 }}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: colors.text.secondary }}>FREE AND OPEN DAILY</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}> 
        <Text style={{ color: colors.text.secondary }}>
          FROM 8 AM TO 30 MINUTES PAST SUNSET
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: colors.ui.quaternary,
            font: fonts.body,
            textAlign: "center",
          }}
        >
          The Aronson Fine Arts Center is open from Thursday to Sunday (with the
          exception of during private events)
        </Text>
      </View>

      <TouchableOpacity>
        <Text
          style={{ color: colors.ui.primary, textAlign: "center" }}
          onPress={() =>
            Linking.openURL("https://www.laumeiersculpturepark.org/visit")
          }
        >
          CLICK TO SEE HOURS
        </Text>
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: colors.ui.quaternary,
            font: fonts.body,
            textAlign: "center",
          }}
        >
          Restrooms are open in the Way Field and Carriage House
        </Text>
      </View>

      <TouchableOpacity>
        <Text
          style={{ color: colors.ui.primary, textAlign: "center" }}
          onPress={() =>
            Linking.openURL(
              "https://www.laumeiersculpturepark.org/park-sculpture-map"
            )
          }
        >
          Plan A Visit / View Park Map
        </Text>
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: colors.ui.quaternary,
            font: fonts.body,
            textAlign: "center",
          }}
        >
          LAUMEIER SCULPTURE PARK / ENGAGING THE COMMUNITY THROUGH ART AND
          NATURE
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: colors.ui.quaternary,
            font: fonts.body,
            textAlign: "center",
          }}
        >
          Please visit our COVID safety page for the most up-to-date information
          on Laumeier's COVID-19 health and safety protocols.
        </Text>
      </View>
    </SafeAreaView>
  );
};
