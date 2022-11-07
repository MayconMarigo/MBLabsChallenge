import { ThemeProvider } from "../theme/Theme"
import { AuthProvider } from "./Authentication/Authentication"

const ContextsContainer = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}
export default ContextsContainer