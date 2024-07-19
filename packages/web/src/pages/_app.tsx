import { AppProps } from "next/app";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App;