import type { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
	font-size: 14px;

	${({ theme }) => theme.breakpoints.tablet} {
		font-size: 15px;
	}

	${({ theme }) => theme.breakpoints.desktop} {
		font-size: 18px;
	}

	${({ theme }) => theme.breakpoints.tv} {
		font-size: 30px;
	}

	${({ theme }) => theme.breakpoints.tv3k} {
		font-size: 40px;
	}

	${({ theme }) => theme.breakpoints.tv4k} {
		font-size: 50px;
	}

	${({ theme }) => theme.breakpoints.tv5k} {
		font-size: 60px;
	}
`

interface DescriptionProps {
	className?: string
}

export const Description: FC<DescriptionProps> = ({ className, children }) => {
	return <Wrapper className={className}>{children}</Wrapper>
}
