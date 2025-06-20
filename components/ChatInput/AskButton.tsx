import { FunctionComponent } from "react"
import { Image } from "expo-image"
import { TouchableOpacityProps } from "react-native"
import styled from "styled-components/native"

type AskButtonProps = TouchableOpacityProps & {
  onClick: () => void
}

export const AskButton: FunctionComponent<AskButtonProps> = ({ onClick }) => (
  <StyledAskButton onPress={onClick}>
    <StyledImage source={require("@/assets/images/arrow-down.svg")} />
  </StyledAskButton>
)

const StyledAskButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 500px;
  background: #111;
  align-items: center;
  justify-content: center;
`

const StyledImage = styled(Image)`
  width: 32px;
  height: 33px;
  flex-shrink: 0;
  aspect-ratio: 32/33;
  color: #fff;
`
