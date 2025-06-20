import { FunctionComponent, ReactNode } from "react"
import { ImageBackground, StyleSheet } from "react-native"

import styled from "styled-components/native"

type BackgroundProps = {
  children: ReactNode
}

export const Background: FunctionComponent<BackgroundProps> = ({
  children,
}) => {
  return (
    <ImageBackground
      source={require("@/assets/images/bg-image.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <StyledBackdrop>
        <CenteredContent>{children}</CenteredContent>
      </StyledBackdrop>
    </ImageBackground>
  )
}

const StyledBackdrop = styled.View`
  background-color: rgba(17, 17, 17, 0.4);
  height: 100%;
`

const CenteredContent = styled.View`
  flex: 1;
  justifycontent: center;
  alignitems: center;
`

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
})
