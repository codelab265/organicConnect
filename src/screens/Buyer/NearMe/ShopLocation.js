import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Circle, Callout } from "react-native-maps";

const ShopLocation = () => {
  const route = useRoute();
  console.log(route.params);
  const { longitude, latitude,storeName } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker coordinate={{ longitude, latitude }}>
            <Callout>
                <Text></Text>
            </Callout>
        </Marker>
        <Circle center={{ longitude, latitude }} radius={500} strokeWidth={3} strokeColor={'red'} />
      </MapView>
    </View>
  );
};

export default ShopLocation;
const styles = StyleSheet.create({
  map: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
