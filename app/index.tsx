import { Background } from "@/components/Background"
import { ChatInput } from "@/components/ChatInput/ChatInput"
import { Footer } from "@/components/Footer"
import { Heading } from "@/components/Heading"
import { Subheading } from "@/components/Subheading"
import { View } from "react-native"
import styled from "styled-components/native"

const Index = () => (
  <Background>
    <AlignSpaceBetween>
      <HeadingContainer>
        <Heading>Understand Nostr NIPs in Seconds</Heading>
        <Subheading>
          No more digging through specs. Just ask your question and get a
          precise, developer-focused answer in real time.
        </Subheading>
      </HeadingContainer>
      <View>
        <ChatInput />
        <Footer />
      </View>
    </AlignSpaceBetween>
  </Background>
)

const AlignSpaceBetween = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const HeadingContainer = styled.View`
  padding: 72px 16px 16px;
  gap: 16px;
`

export default Index
