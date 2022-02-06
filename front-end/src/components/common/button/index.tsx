import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.cinder};
	color: ${({ theme }) => theme.colors.white};
	border: 2px solid ${({ theme }) => theme.colors.white};
	padding: 8px 16px;
	text-transform: uppercase;
	font-weight: bold;
	min-width: 150px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.cinder};
	}
`

interface ButtonProps {
	className?: string
	onClick: () => void
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
	return (
		<Wrapper className={className} onClick={onClick}>
			{children}
		</Wrapper>
	)
}
