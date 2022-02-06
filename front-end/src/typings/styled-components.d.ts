import { themes } from '../styles/themes'

type CustomV1 = typeof themes.v1
type CustomV2 = typeof themes.v2

declare module 'styled-components' {
	export interface DefaultTheme extends CustomV1, CustomV2 {}
}
