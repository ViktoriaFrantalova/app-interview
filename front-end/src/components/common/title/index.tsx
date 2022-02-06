import type { FC, RefObject } from 'react'
import styled, { css } from 'styled-components'

interface TitlteProps {
	className?: string
	size: TitleEnumSize
	reference?: RefObject<HTMLElement>
}

export enum TitleEnumSize {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
}

const Text = styled.h1<{ as: TitleEnumSize }>`
	font-weight: 700;
	text-transform: uppercase;

	${({ as, theme }) => {
		switch (true) {
			case as === TitleEnumSize.H2:
				return css`
					font-size: 18px;

					${theme.breakpoints.tablet} {
						font-size: 22px;
					}

					${theme.breakpoints.desktop} {
						font-size: 36px;
					}

					${theme.breakpoints.tv} {
						font-size: 60px;
					}

					${theme.breakpoints.tv3k} {
						font-size: 80px;
					}

					${theme.breakpoints.tv4k} {
						font-size: 100px;
					}

					${theme.breakpoints.tv5k} {
						font-size: 120px;
					}
				`
			case as === TitleEnumSize.H3:
				return css`
					font-size: 14px;

					${theme.breakpoints.mobile} {
						font-size: 15px;
					}

					${theme.breakpoints.tablet} {
						font-size: 18px;
					}

					${theme.breakpoints.desktop} {
						font-size: 30px;
					}

					${theme.breakpoints.tv} {
						font-size: 40px;
					}

					${theme.breakpoints.tv3k} {
						font-size: 60px;
					}

					${theme.breakpoints.tv4k} {
						font-size: 80px;
					}

					${theme.breakpoints.tv5k} {
						font-size: 100px;
					}
				`
			case as === TitleEnumSize.H4:
				return css`
					font-size: 14px;

					${theme.breakpoints.mobile} {
						font-size: 15px;
					}

					${theme.breakpoints.tablet} {
						font-size: 18px;
					}

					${theme.breakpoints.desktop} {
						font-size: 22px;
					}

					${theme.breakpoints.tv} {
						font-size: 36px;
					}

					${theme.breakpoints.tv3k} {
						font-size: 50px;
					}

					${theme.breakpoints.tv4k} {
						font-size: 70px;
					}

					${theme.breakpoints.tv5k} {
						font-size: 90px;
					}
				`
			default:
				return css`
					font-size: 25px;
					line-height: normal;

					${theme.breakpoints.tablet} {
						font-size: 40px;
					}

					${theme.breakpoints.tv} {
						font-size: 80px;
					}

					${theme.breakpoints.tv3k} {
						font-size: 100px;
					}

					${theme.breakpoints.tv4k} {
						font-size: 130px;
					}

					${theme.breakpoints.tv5k} {
						font-size: 160px;
					}
				`
		}
	}};

	${({ theme }) => theme.breakpoints.tablet} {
		text-transform: initial;
	}
`

export const Title: FC<TitlteProps> = ({ className, size, children, reference }) => (
	<Text className={className} as={size} ref={reference}>
		{children}
	</Text>
)
