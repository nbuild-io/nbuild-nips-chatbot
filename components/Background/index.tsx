import { ImageBackground, StyleSheet, View } from "react-native"
import React, { ReactNode } from "react"

type BackgroundProps = {
  children: ReactNode
}

export const Background: React.FC<BackgroundProps> = ({ children }) => (
  <ImageBackground
    source={require("../../assets/images/bg-image.jpg")}
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.centeredContent}>{children}</View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
