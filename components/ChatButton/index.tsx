import { TouchableOpacity, TouchableOpacityProps } from "react-native"

import { FunctionComponent } from "react"
import { Image } from "expo-image"
import styled from "styled-components/native"
import { useIsMobile } from "@/hooks/useIsMobile"

type ChatButtonProps = TouchableOpacityProps & {
  onClick: () => void
}

export const ChatButton: FunctionComponent<ChatButtonProps> = ({ onClick }) => {
  const isMobile = useIsMobile()

  return (
    <StyledChatButton onPress={onClick} $isMobile={isMobile}>
      <StyledImage source={require("@/assets/images/new-chat.svg")} />
    </StyledChatButton>
  )
}

const StyledChatButton = styled(TouchableOpacity)<{
  $isMobile: boolean
}>`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 500px;
  background: #111;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isMobile &&
    `
      margin: 24px 8px;
  `}
`

const StyledImage = styled(Image)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  color: #fff;
`
