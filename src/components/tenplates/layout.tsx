import React from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalStyle from "../../theme/globalStyles";
import {theme} from "../../theme";
import '../../theme/fonts/fonts.css';
import Footer from "../organisms/footer";
import MyHeader from "../organisms/my-header";
import SmoothScrollButton from "../atoms/smooth-scroll-button";

type LayoutType = {};

const Layout = ({ children }: React.PropsWithChildren<LayoutType>) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
            <script
                defer
                src="https://cloud.umami.is/script.js"
                data-website-id="269619fe-245e-4207-a8c6-7710fd78768a"
            ></script>
        <MyHeader/>
        <main>{children}</main>
        <Footer/>
        <SmoothScrollButton />
    </ThemeProvider>
);

export default Layout;
