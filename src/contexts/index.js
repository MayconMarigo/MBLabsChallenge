import { ThemeProvider } from "../theme/Theme"

const ContextsContainer = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
export default ContextsContainer