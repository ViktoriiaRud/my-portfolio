import { theme } from './theme';

import 'styled-components';

export type CustomTheme = typeof theme;

export type CustomThemeColorType = keyof CustomTheme['colors'];

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/consistent-type-definitions
    export interface DefaultTheme extends CustomTheme {}
}