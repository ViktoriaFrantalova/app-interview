import React, { FC } from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { themes } from './themes'

// styles from iconmoon
import '../components/common/icon/style.css'

export const GlobalStyle = createGlobalStyle`


  html, body, body > div {
    font-family: 'oscine-rg', Arial, sans-serif;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.black};
		overflow: hidden;
  }

	#root {
		display: flex;
		flex-direction: column;
	}

	* {
		outline: 0;
		box-sizing: border-box;
	}

	a {
		color: inherit;
		display: inline-block;
		text-decoration: none;
	}

	a, label, button {
		cursor: pointer;
	}

`

export const Styler: FC = ({ children }) => {
	return (
		<ThemeProvider theme={themes.v1}>
			<Reset />
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}
