import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Header } from '../layout'
import { Home, Schedule, Search, Sports, Refer, Settings, MyAccount, Help, Links } from '../pages'
import styled from 'styled-components'
import { FC } from 'react'

const Section = styled.section`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.cinder};
	color: ${({ theme }) => theme.colors.white};
	overflow-y: auto;
`

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Section>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/search" element={<Search />} />
					<Route path="/sports" element={<Sports />} />
					<Route path="/refer" element={<Refer />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/myAccount" element={<MyAccount />} />
					<Route path="/help" element={<Help />} />
					<Route path="/links" element={<Links />} />
				</Routes>
			</Section>
			<Footer />
		</BrowserRouter>
	)
}
