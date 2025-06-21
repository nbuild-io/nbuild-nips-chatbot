import { FunctionComponent, ReactElement } from "react"

import { ChatMessage } from "./ChatMessage"
import styled from "styled-components/native"
import { useIsMobile } from "@/hooks/useIsMobile"

type ChatMessageListProps = {
  children: ReactElement<typeof ChatMessage>[]
}

export const ChatMessageList: FunctionComponent<ChatMessageListProps> = ({
  children,
}) => {
  const isMobile = useIsMobile()

  return (
    <StyledChatMessageList $isMobile={isMobile}>
      {children}
    </StyledChatMessageList>
  )
}

const StyledChatMessageList = styled.View<{
  $isMobile: boolean
}>`
  max-width: 680px;
  align-self: center;
  padding-top: 48px;
  padding-bottom: 24px;
  gap: 32px;

  ${(props) =>
    props.$isMobile &&
    `
      max-width: 846px;
      padding-top: 24px;
      padding-left: 8px;
      padding-right: 8px;
  `}
`
