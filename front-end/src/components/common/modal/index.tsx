import type { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, ContainerEnumDirection } from '..'

interface ModalProps {
	showModal: boolean
	className?: string
}

const animation = keyframes`
	0% {
    opacity: 0;
    transform: scale(0.5);
  }
	50% {
    opacity: 0.5;
    transform: scale(1.5);	
  }
	100% {
    opacity: 1;
    transform: scale(1);
  }
`

const Wrapper = styled(Container)<Pick<ModalProps, 'showModal'>>`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.cinder};
	animation: 0.5s ease-in-out 0s 1 normal none running ${animation};
	z-index: 20;
`

export const Modal: FC<ModalProps> = ({ showModal, children, className }) =>
	showModal ? (
		<Wrapper className={className} showModal={showModal} direction={ContainerEnumDirection.COL}>
			{children}
		</Wrapper>
	) : null
