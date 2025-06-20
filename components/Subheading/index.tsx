import { FunctionComponent, ReactNode } from "react"

import { H2 } from "@expo/html-elements"
import { TextProps } from "react-native"
import styled from "styled-components/native"
import { useFonts } from "expo-font"

type SubheadingProps = TextProps & {
  children: ReactNode
}

export const Subheading: FunctionComponent<SubheadingProps> = ({
  children,
}) => {
  const [fontsLoaded] = useFonts({
    "NotoSans-Medium": require("@/assets/fonts/NotoSans-Medium.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return <StyledSubheading>{children}</StyledSubheading>
}

const StyledSubheading = styled(H2)`
  color: #fff;
  font-family: "NotoSans-Medium";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin: 0px;
  text-align: center;
`
