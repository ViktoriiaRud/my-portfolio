export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type SizeType = Record<Breakpoints, string>;
export type BreakpointType = Record<Breakpoints, string>;

const size: SizeType = {
    xs: '360px',
    sm: '576px',
    md: '768px',
    lg: '1240px',
    xl: '1440px',
    xxl: '1920px',
};

const breakpoint: BreakpointType = {
    xs: `@media (min-width: ${size.xs})`, // 360px
    sm: `@media (min-width: ${size.sm})`, // 576px
    md: `@media (min-width: ${size.md})`, // 768px
    lg: `@media (min-width: ${size.lg})`, // 1240px
    xl: `@media (min-width: ${size.xl})`, // 1440px
    xxl: `@media (min-width: ${size.xxl})`, // 1920px
} as const;

export { breakpoint, size };