import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	height: 100%;
`

export const MyAccount: FC = () => {
	return <Wrapper>My account</Wrapper>
}
