import { FunctionComponent, useState } from "react"

import { AskButton } from "./AskButton"
import { TextProps } from "react-native"
import styled from "styled-components/native"
import { useFonts } from "expo-font"
import { useIsMobile } from "@/hooks/useIsMobile"

type ChatInputProps = TextProps & {}

export const ChatInput: FunctionComponent<ChatInputProps> = () => {
  const [prompt, setPrompt] = useState<string>("")

  const isMobile = useIsMobile()

  const [fontsLoaded] = useFonts({
    "NotoSans-Regular": require("@/assets/fonts/NotoSans-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <StyledChatInput $isMobile={isMobile}>
      <StyledTextInput
        onChangeText={setPrompt}
        value={prompt}
        placeholder="Ask anything about NIPs"
        style={{ outline: "none" }}
        multiline
        textAlignVertical="top"
      />
      <AskButtonContainer>
        <AskButton onClick={() => console.log("submit prompt")} />
      </AskButtonContainer>
    </StyledChatInput>
  )
}

const StyledChatInput = styled.View<{
  $isMobile: boolean
}>`
  background: #fff;
  border-radius: 24px 24px 0px 0px;
  border-bottom-style: solid;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
  padding: 20px 16px 16px 24px;

  ${(props) =>
    !props.$isMobile &&
    `
      border-bottom: 0px;
      border-radius: 24px;
      width: 680px;
      height: 208px;
      align-self: center;
  `}
`

const StyledTextInput = styled.TextInput`
  color: #111;
  font-family: "NotoSans-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  height: 165px;
  padding-right: 8px;
`

const AskButtonContainer = styled.View`
  height: 48px;
  align-items: flex-end;
`
