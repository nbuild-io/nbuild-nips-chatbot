import * as Linking from "expo-linking"

import { Drawer } from "expo-router/drawer"
import { DrawerItem } from "@react-navigation/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "NIPs Chat",
              title: "NIPs Chat",
            }}
          />
          <DrawerItem
            label="Roadmap"
            onPress={() => Linking.openURL("https://www.nbuild.io")}
          />
          <Drawer.Screen
            name="contact"
            options={{
              drawerLabel: "Contact",
              title: "Contact",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  )
}
