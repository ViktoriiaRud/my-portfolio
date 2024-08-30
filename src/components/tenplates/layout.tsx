import React from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalStyle from "../../theme/globalStyles";
import {theme} from "../../theme";
import '../../theme/fonts/fonts.css';
import Footer from "../organisms/footer";
import MyHeader from "../organisms/my-header";
import {dataHeader} from "../../data/data-header";
import SmoothScrollButton from "../atoms/smooth-scroll-button";


type LayoutType = {};

const Layout = ({ children }: React.PropsWithChildren<LayoutType>) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MyHeader {...dataHeader}/>
        <main>{children}</main>
        <Footer/>
        <SmoothScrollButton />
    </ThemeProvider>
);

export default Layout;
