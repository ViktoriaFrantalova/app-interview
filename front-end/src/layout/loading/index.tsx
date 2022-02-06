import React, { FC } from 'react'
import styled from 'styled-components'
import { Loader } from '../../components'

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Loading: FC = () => {
	return (
		<Wrapper>
			<Loader />
		</Wrapper>
	)
}
