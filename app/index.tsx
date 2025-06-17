import { Background } from "@/components/Background"
import { Heading } from "@/components/Heading"
import { Subheading } from "@/components/Subheading"
import { View } from "react-native"

export default function Index() {
  return (
    <Background>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading>Understand Nostr NIPs in Seconds</Heading>
        <Subheading>
          No more digging through specs. Just ask your question and get a
          precise, developer-focused answer in real time.
        </Subheading>
      </View>
    </Background>
  )
}
