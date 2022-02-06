import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

interface ISpinningLoaderProps {
	size?: number
}

const spinAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Spinner = styled.div<ISpinningLoaderProps>`
	display: block;
	position: relative;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;

	& div {
		transform-origin: 40px 40px;
		animation: ${spinAnimation} 1.2s linear infinite;

		&:after {
			content: ' ';
			display: block;
			position: absolute;
			top: ${80 / 26.7}px;
			left: ${80 / 2.2}px;
			width: ${80 / 13.4}px;
			height: ${80 / 4.4}px;
			border-radius: 50%;
			background: ${({ theme }) => theme.colors.white};
		}

		&:nth-child(1) {
			transform: rotate(0deg);
			animation-delay: -1.1s;
		}
		&:nth-child(2) {
			transform: rotate(30deg);
			animation-delay: -1s;
		}
		&:nth-child(3) {
			transform: rotate(60deg);
			animation-delay: -0.9s;
		}
		&:nth-child(4) {
			transform: rotate(90deg);
			animation-delay: -0.8s;
		}
		&:nth-child(5) {
			transform: rotate(120deg);
			animation-delay: -0.7s;
		}
		&:nth-child(6) {
			transform: rotate(150deg);
			animation-delay: -0.6s;
		}
		&:nth-child(7) {
			transform: rotate(180deg);
			animation-delay: -0.5s;
		}
		&:nth-child(8) {
			transform: rotate(210deg);
			animation-delay: -0.4s;
		}
		&:nth-child(9) {
			transform: rotate(240deg);
			animation-delay: -0.3s;
		}
		&:nth-child(10) {
			transform: rotate(270deg);
			animation-delay: -0.2s;
		}
		&:nth-child(11) {
			transform: rotate(300deg);
			animation-delay: -0.1s;
		}
		&:nth-child(12) {
			transform: rotate(330deg);
			animation-delay: 0s;
		}
	}
`

export const Loader: FC<ISpinningLoaderProps> = ({ size = 80 }) => (
	<Spinner size={size}>
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</Spinner>
)
