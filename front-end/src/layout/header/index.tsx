import { FC } from 'react'
import styled from 'styled-components'
import { Icon, IconEnumName, Logo } from '../../components'
import { Navigation } from '../navigation'
import { Link as LinkC } from 'react-router-dom'

const Wrapper = styled.header`
	background-color: ${({ theme }) => theme.colors.cinder};
	color: ${({ theme }) => theme.colors.white};
	height: 104px;
	border-bottom: solid 1px ${({ theme }) => theme.colors.ebonyClay};

	${({ theme }) => theme.breakpoints.mobile} {
		height: 56px;
	}
`

const ShareLink = styled(LinkC)`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${({ theme }) => theme.colors.white};
	padding: 8px 16px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.white} !important;
		color: ${({ theme }) => theme.colors.cinder};
	}
`

const List = styled.ul`
	background-color: ${({ theme }) => theme.colors.cinder};
	color: ${({ theme }) => theme.colors.white};
	top: 100%;
	width: 480px;
	padding: 8px 0;
	position: absolute;
	z-index: 1;
	overflow: auto;
	display: flex;
	border: solid 1px ${({ theme }) => theme.colors.ebonyClay};
	border-top: 0;
	left: 0;
	flex-wrap: wrap;
`

const Item = styled.li`
	flex: 0 50%;
	outline: 0;
	font-weight: 500;
	text-transform: capitalize;
	width: 100%;
	user-select: none;
	cursor: pointer;
`

const MenuList = styled(List)`
	left: 0;
	padding: 10px 0 0;
	width: 100%;
	display: block;
	top: 104px;
	position: fixed;
	border-width: 0 0 1px 0;

	${Item}:nth-child(4) {
		margin: 8px 0;
		border: 2px solid ${({ theme }) => theme.colors.ebonyClay};
		border-width: 2px 0;
	}

	${({ theme }) => theme.breakpoints.mobile} {
		left: initial;
		right: 0;
		width: 280px;
		top: 55px;
		border: solid 1px ${({ theme }) => theme.colors.ebonyClay};
		position: absolute;
	}
`

const SportList = styled(List)`
	left: 0;
	padding: 10px 0 0;
	width: 100%;
	display: block;
	top: 104px;
	position: fixed;
	border-width: 0 0 1px 0;

	${({ theme }) => theme.breakpoints.mobile} {
		left: initial;
		display: flex;
		right: 0;
		width: 280px;
		top: 100%;
		border-width: 1px;
		position: absolute;
	}
`

const MenuMark = styled.span`
	color: ${({ theme }) => theme.colors.greyGoose};
	font-size: 14px;
`

const Link = styled(LinkC)`
	display: flex;
	align-items: center;
	padding: 14px;
	background-color: ${({ theme }) => theme.colors.cinder};

	&:hover {
		background-color: ${({ theme }) => theme.colors.ebonyClay};
	}

	i {
		margin-right: 14px;
		font-size: 24px;
	}
`

const sportContentList = [
	<Link to="/boxing">boxing</Link>,
	<Link to="/shows">shows</Link>,
	<Link to="/football">football</Link>,
	<Link to="/motosport">motosport</Link>,
	<Link to="/hokey">hokey</Link>,
	<Link to="/tennis">tennis</Link>,
]

const mockMenuList = [
	<Link to="/settings">
		<Icon name={IconEnumName.SETTINGS} /> settings
	</Link>,
	<Link to="/myAccount">
		<Icon name={IconEnumName.USER_CIRCLE} /> my account
	</Link>,
	<Link to="/help">
		<Icon name={IconEnumName.HELP_CIRCLE} /> help
	</Link>,
	<Link to="/sign out">
		<Icon name={IconEnumName.EXIT_TO_APP} /> sign out
	</Link>,
	<Link to="/help/privacy-global">
		<MenuMark>privacy policy and cookie notice</MenuMark>
	</Link>,
	<Link to="/help/terms-global">
		<MenuMark>terms and conditions</MenuMark>
	</Link>,
]

export const listNavigation = [
	{
		link: '/',
		name: 'logo',
		children: <Logo />,
	},
	{
		link: '/',
		children: 'home',
		withHover: true,
	},
	{
		link: '/schedule',
		children: 'schedule',
		withHover: true,
	},
	{
		children: (
			<>
				sports <Icon name={IconEnumName.KEYBOARD_ARROW_DOWN} />
			</>
		),
		withHover: true,
		withMenu: (
			<SportList>
				{sportContentList.map((children, index) => (
					<Item key={index}>{children}</Item>
				))}
			</SportList>
		),
	},
	{
		name: 'search',
		link: '/search',
		children: (
			<>
				<Icon name={IconEnumName.SEARCH} />
				<span>search</span>
			</>
		),
		withHover: true,
	},
	{
		split: true,
	},
	{
		name: 'referer',
		children: (
			<ShareLink to="/refer" as={Link}>
				refer a friend
			</ShareLink>
		),
	},
	{
		name: 'menu',
		children: (
			<>
				<Icon name={IconEnumName.MENU} />
				<span>menu</span>
				<Icon name={IconEnumName.KEYBOARD_ARROW_DOWN} />
			</>
		),
		withMenu: (
			<MenuList>
				{mockMenuList.map((children, index) => (
					<Item key={index}>{children}</Item>
				))}
			</MenuList>
		),
		withHover: true,
	},
]

export const Header: FC = () => {
	return (
		<Wrapper>
			<Navigation listNavigation={listNavigation} />
		</Wrapper>
	)
}
