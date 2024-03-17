import React from 'react';
import {ThemeProvider} from 'styled-components'

import GlobalStyle from "../../theme/globalStyles";
import {theme} from "../../theme";


type LayoutType = {};

const Layout = ({ children }: React.PropsWithChildren<LayoutType>) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
    </ThemeProvider>
);

export default Layout;
