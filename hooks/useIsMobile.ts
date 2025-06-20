import { useWindowDimensions } from "react-native"

/**
 * Custom hook to determine if the current window width is considered "mobile".
 * Returns true if width is less than or equal to 846, otherwise false.
 */
export function useIsMobile(): boolean {
  const { width } = useWindowDimensions()
  return width <= 846
}
