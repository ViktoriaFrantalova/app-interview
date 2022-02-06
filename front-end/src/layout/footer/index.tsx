import React, { FC } from 'react'
import styled from 'styled-components'
import { Link as LinkC } from 'react-router-dom'

const Wrapper = styled.footer`
	background-color: ${({ theme }) => theme.colors.cinder};
	color: ${({ theme }) => theme.colors.greyGoose};
	border-top: solid 1px ${({ theme }) => theme.colors.ebonyClay};
`

const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: capitalize;
	margin: 0 auto;

	${({ theme }) => theme.breakpoints.tablet} {
		flex-direction: row;
	}
`

const Item = styled.li`
	padding: 10px;
`

const Link = styled(LinkC)`
	padding: 2px;
	border-bottom: 1px solid transparent;

	&:hover {
		border-bottom-color: ${({ theme }) => theme.colors.greyGoose};
	}
`

const mockFooterList = [
	{
		link: '/links',
		title: 'links',
	},
	{
		link: '/help',
		title: 'help',
	},
]

export const Footer: FC = () => {
	return (
		<Wrapper>
			<List>
				{mockFooterList.map(({ link, title }, index) => (
					<Item key={index}>
						<Link to={link}>{title}</Link>
					</Item>
				))}
			</List>
		</Wrapper>
	)
}
