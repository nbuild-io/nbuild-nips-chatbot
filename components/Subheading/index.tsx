import { H2 } from "@expo/html-elements"
import React from "react"
import { TextProps } from "react-native"
import styled from "styled-components/native"
import { useFonts } from "expo-font"

type SubheadingProps = TextProps & {
  children: React.ReactNode
}

export const Subheading: React.FC<SubheadingProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "NotoSans-Medium": require("../../assets/fonts/NotoSans-Medium.ttf"),
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
  margin: 8px 0;
  text-align: center;
`
