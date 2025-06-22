import { FunctionComponent, ReactNode } from "react"

import { H1 } from "@expo/html-elements"
import { TextProps } from "react-native"
import styled from "styled-components/native"
import { useFonts } from "expo-font"

type HeadingProps = TextProps & {
  children: ReactNode
}

export const Heading: FunctionComponent<HeadingProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line max-len
    "ABCWhyteInktrap-Heavy": require("@/assets/fonts/ABCWhyteInktrap-Heavy-Trial.otf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return <StyledHeading>{children}</StyledHeading>
}

const StyledHeading = styled(H1)`
  color: #fff;
  font-family: "ABCWhyteInktrap-Heavy";
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
  margin: 0px;
  text-align: center;
`
