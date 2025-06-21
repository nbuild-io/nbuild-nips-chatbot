import { StyleSheet, Text, View } from "react-native"

import { Background } from "@/components/Background"
import { ChatButton } from "@/components/ChatButton"
import { ChatInput } from "@/components/ChatInput/ChatInput"
import { ChatMessage } from "@/components/ChatMessage/ChatMessage"
import { ChatMessageList } from "@/components/ChatMessage/ChatMessageList"
import { Footer } from "@/components/Footer"
import styled from "styled-components/native"
import { useFonts } from "expo-font"
import { useIsMobile } from "@/hooks/useIsMobile"
import { useLocalSearchParams } from "expo-router"

const ActiveChat = () => {
  const { id } = useLocalSearchParams()

  const isMobile = useIsMobile()

  const [fontsLoaded] = useFonts({
    "NotoSans-Regular": require("@/assets/fonts/NotoSans-Regular.ttf"),
  })

  return (
    <Background>
      <AlignSpaceBetween>
        <StyledChatContainer $isMobile={isMobile}>
          <View style={{ alignItems: "flex-end" }}>
            <ChatButton onClick={() => console.log("New chat clicked")} />
          </View>
          <ChatMessageList>
            <ChatMessage alignSelf="flex-end">
              <Text style={styles.message}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </ChatMessage>
            <ChatMessage>
              <Text style={styles.message}>
                Lorem ipsum dolor sit amet consectetur. Habitasse pharetra in
                sed tempus viverra turpis lorem eget. Sit adipiscing nec
                dignissim faucibus condimentum lectus molestie turpis. Congue
                sit vivamus tellus viverra eget turpis. Eleifend eget nunc
                ultrices cursus pulvinar ac ullamcorper risus felis.
              </Text>
            </ChatMessage>
          </ChatMessageList>
        </StyledChatContainer>
        <View>
          <ChatInput />
          <Footer />
        </View>
      </AlignSpaceBetween>
    </Background>
  )
}

const AlignSpaceBetween = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const StyledChatContainer = styled.View<{
  $isMobile: boolean
}>`
  max-width: 846px;
  align-self: center;
  justify-content: end;

  ${(props) =>
    !props.$isMobile &&
    `
      padding-top: 48px;
  `}
`

const styles = StyleSheet.create({
  message: {
    color: "#111",
    fontFamily: "NotoSans-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 24,
  },
})

export default ActiveChat
