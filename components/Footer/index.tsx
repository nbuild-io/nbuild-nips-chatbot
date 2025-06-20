import { FunctionComponent } from "react"
import { Link } from "expo-router"
import { Text } from "react-native"
import styled from "styled-components/native"
import { useFonts } from "expo-font"
import { useIsMobile } from "@/hooks/useIsMobile"

export const Footer: FunctionComponent = () => {
  const isMobile = useIsMobile()

  const [fontsLoaded] = useFonts({
    "NotoSans-Regular": require("@/assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Bold": require("@/assets/fonts/NotoSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <StyledFooter $isMobile={isMobile}>
      <StyledText $isMobile={isMobile}>
        &copy; 2025 nbuild.io, Germany
      </StyledText>
      {!isMobile && <BoldText $isMobile={false}>&nbsp;&middot;&nbsp;</BoldText>}
      <Links>
        <StyledLink $isMobile={isMobile} href="/terms-of-use">
          Terms of Use
        </StyledLink>
        <BoldText $isMobile={isMobile}>&nbsp;|&nbsp;</BoldText>
        <StyledLink $isMobile={isMobile} href="/impressum">
          Impressum
        </StyledLink>
      </Links>
    </StyledFooter>
  )
}

const StyledFooter = styled.View<{
  $isMobile: boolean
}>`
  font-family: "NotoSans-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding-vertical: 12px;
  padding-horizontal: 16px;

  ${(props) =>
    !props.$isMobile &&
    `
      background-color: transparent;
      flex-direction: row;
      padding: 24px 0px 48px;
  `}
`

const Links = styled.View`
  flex-direction: row;
  align-items: center;
`

const StyledLink = styled(Link)<{ $isMobile: boolean }>`
  color: #111;
  font-family: "NotoSans-Bold";
  font-weight: 700;

  ${(props) =>
    !props.$isMobile &&
    `
      color: #fff;
  `}
`

const StyledText = styled(Text)<{ $isMobile: boolean }>`
  color: #111;

  ${(props) =>
    !props.$isMobile &&
    `
      color: #fff;
  `}
`

const BoldText = styled.Text<{ $isMobile: boolean }>`
  color: #111;
  font-family: "NotoSans-Bold";
  font-weight: 700;

  ${(props) =>
    !props.$isMobile &&
    `
      color: #fff;
  `}
`
