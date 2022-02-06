import React, { FC } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 10px 0;
	border-bottom: 2px solid ${({ theme }) => theme.colors.white};
	margin: 40px auto;

	${({ theme }) => theme.breakpoints.tablet} {
		border-bottom-width: 3px;
	}
`

const Input = styled.input`
	font-size: 18px;
	padding: 10px 20px;
	border: 0;
	color: ${({ theme }) => theme.colors.white};
	background-color: transparent;
	width: 100%;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 20px;
		padding: 15px 20px;
	}

	${({ theme }) => theme.breakpoints.desktop} {
		font-size: 25px;
		padding: 20px 25px;
	}
`

export const Search: FC = () => {
	return (
		<InputWrapper>
			<Input type="text" placeholder="Search" />
		</InputWrapper>
	)
}
