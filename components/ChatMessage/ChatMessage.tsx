import { FunctionComponent, ReactNode, useState } from "react"
import { LayoutChangeEvent, StyleSheet, View } from "react-native"

type ChatMessageProps = {
  alignSelf?: "flex-start" | "flex-end"
  children: ReactNode
}

export const ChatMessage: FunctionComponent<ChatMessageProps> = ({
  alignSelf = "flex-start",
  children,
}) => {
  const [cornerRadius, setCornerRadius] = useState<number>(0)

  return (
    <View
      style={[
        { alignSelf: alignSelf, borderRadius: cornerRadius },
        styles.padding,
        styles.background,
      ]}
      onLayout={(event: LayoutChangeEvent) => {
        // You must measure the height of the chat message
        // to set the border radius dynamically.
        const { height } = event.nativeEvent.layout
        setCornerRadius(height > 64 ? 24 : 500)
      }}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  background: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
})
