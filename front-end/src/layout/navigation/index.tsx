import { FC, ReactNode, useEffect, useState, ReactElement, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkC } from 'react-router-dom'
import { useClickOutside } from '../../hooks'

const KEY = 'activeLink'

const Nav = styled.nav`
	min-height: 56px;
	display: flex;
	width: 100%;
	padding-top: 70px;
	position: relative;

	${({ theme }) => theme.breakpoints.mobile} {
		padding-top: 0;
		position: initial;
	}
`

const Item = styled.li<{ active?: boolean; name?: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	user-select: none;
	position: relative;
	height: 100%;
	font-size: ${({ theme }) => theme.fontSize.medium};
	font-weight: 600;
	margin: 0 16px;
	cursor: pointer;

	${({ name }) => {
		switch (true) {
			case name === 'referer':
				return css`
					display: none;
				`
			case name === 'logo':
				return css`
					position: absolute;
					height: initial;
					top: 12px;
					left: 50%;
					transform: translateX(-50%);
				`
			case name === 'search':
				return css`
					position: absolute;
					top: 0;
					height: initial;
					right: 0;
					padding: 12px;
					margin: 0;

					span {
						display: none;
					}
				`
			case name === 'menu':
				return css`
					margin: 0;
					height: initial;
					position: absolute;
					left: 0;
					top: 0;
										padding: 12px;

					> span {
						display: none;
					}

					i:first-child {
						font-size: 30px;
					}

					i:nth-child(3) {
							display: none;
						}
					}
				`
		}
	}}};

	${({ theme }) => theme.breakpoints.mobile} {
			${({ name }) => {
				switch (true) {
					case name === 'logo':
						return css`
							position: initial;
							height: initial;
							top: initial;
							left: initial;
							transform: initial;
						`
					case name === 'menu':
						return css`
							margin: 0 16px;
							position: initial;
							height: 100%;
							padding: 0;
							left: initial;
							top: initial;

							> i {
								display: none;
							}
							span,
							i:nth-child(3) {
								display: inline-block;
							}
						`
					case name === 'search':
						return css`
							position: relative;
							height: 100%;
							top: initial;
							right: initial;
							padding: 0 16px;
							order: 1;
						`
				}
			}}};
	};

	${({ theme }) => theme.breakpoints.tablet} {
			${({ name }) =>
				name === 'search' &&
				css`
					order: initial;
					padding: 0;

					span {
						display: inline-block;
					}
				`}
		> i {
			transform: ${({ active }) => active && 'rotate(180deg)'};
		}

		&::after {
			height: 2px;
			transition: all 0.3s;
			position: absolute;
			bottom: 1px;
			left: 0;
			right: 0;
			margin: 0 auto;
			content: '';
			background: ${({ theme }) => theme.colors.sunnyYellow};
			width: 1px;
			opacity: 0;

			${({ active }) =>
				active &&
				css`
					opacity: 1;
					width: 100%;
				`};
		}

		&:hover {
			&::after {
				opacity: 1;
				width: 100%;
			}
		}

		${({ name }) => {
			switch (true) {
				case name === 'referer':
					return css`
						display: flex;

						&:after {
							display: none;
						}
					`
				case name === 'logo':
					return css`
						position: initial;
						height: initial;
						top: initial;
						left: initial;
						transform: initial;
					`
				case name === 'menu':
					return css`
						position: relative;
						margin: initial;
						left: initial;
						top: initial;
					`
			}
		}}};
	};
`

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	${Item} {
		&:first-child {
			margin-left: 10px;
			&:hover {
				&::after {
					opacity: 0;
				}
			}
		}

		&:last-child {
			margin-right: 0;

			&:after {
				width: calc(100% - 16px);
				right: initial;
			}
		}
	}

	${({ theme }) => theme.breakpoints.mobile} {
		justify-content: initial;
	}
`

const Link = styled(LinkC)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`

const Spliter = styled.li`
	flex: 1;
	display: none;

	${({ theme }) => theme.breakpoints.mobile} {
		display: inline-block;
	}
`

interface ListNavigationItemProps {
	link?: string
	name?: string
	children?: ReactNode | ReactNode[]
	withMenu?: ReactElement
	split?: boolean
	withHover?: boolean
}

interface ListNavigationProps {
	listNavigation: ListNavigationItemProps[]
	className?: string
}

export const Navigation: FC<ListNavigationProps> = ({ listNavigation, className }) => {
	const [activeIndex, setActiveIndex] = useState(-1)
	const ref = useRef<HTMLLIElement>(null)
	const clickOutside = useClickOutside(ref)

	useEffect(() => {
		clickOutside && setActiveIndex(-1)
	}, [clickOutside])

	useEffect(() => {
		const localActiveIndex = window.localStorage.getItem(KEY)
		localActiveIndex && setActiveIndex(JSON.parse(localActiveIndex))
	}, [])

	const handleClick = (index: number): void => {
		setActiveIndex(index)
		window.localStorage.setItem(KEY, String(index))
	}

	return (
		<Nav className={className}>
			<List>
				{listNavigation.map(({ link, children, withMenu, split, name, withHover }, index) =>
					split ? (
						<Spliter key={index} />
					) : (
						<Item
							key={index}
							active={withHover && index === activeIndex}
							onClick={() => (index === activeIndex ? handleClick(-1) : handleClick(index))}
							ref={ref}
							name={name}
						>
							{link ? <Link to={link}>{children}</Link> : children}
							{index === activeIndex && withMenu}
						</Item>
					),
				)}
			</List>
		</Nav>
	)
}
