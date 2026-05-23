/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import MapplsGL from "mappls-map-react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MapplsGL.MapView style={{ flex: 1 }}>
        <MapplsGL.Camera
          zoomLevel={14}
          centerCoordinate={[80.2707, 13.0827]}
        />
      </MapplsGL.MapView>
    </View>
  );
}