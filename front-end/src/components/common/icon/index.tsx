import React, { FC } from 'react'
import styled from 'styled-components'
import dataJsonIcons from './selection.json'

const Wrapper = styled.i`
	display: inline-block;
	position: relative;
	z-index: 1;
	width: 30px;
	height: 30px;

	&::before {
		color: inherit;
		font-size: inherit;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

export enum IconEnumName {
	HELP_CIRCLE = 'icon-help-circle',
	SETTINGS = 'icon-settings',
	MENU = 'icon-menu',
	EXIT_TO_APP = 'icon-exit_to_app',
	STAY_CURRENT_PORTRAIT = 'icon-stay_current_portrait',
	STAY_PRIMARY_PORTRAIT = 'icon-stay_primary_portrait',
	SMARTPHONE = 'icon-smartphone',
	LAPTOP_MAC = 'icon-laptop_mac',
	KEYBOARD_ARROW_UP = 'icon-keyboard_arrow_up',
	KEYBOARD_ARROW_RIGHT = 'icon-keyboard_arrow_right',
	KEYBOARD_ARROW_LEFT = 'icon-keyboard_arrow_left',
	KEYBOARD_ARROW_DOWN = 'icon-keyboard_arrow_down',
	CHECK = 'icon-check',
	SEARCH = 'icon-search',
	USER_CIRCLE = 'icon-user-circle-o',
	INSTAGRAM = 'icon-instagram',
	TWITTER = 'icon-twitter',
	FACEBOOK_SQUARE = 'icon-facebook-square',
	GAMEPAD = 'icon-gamepad',
	TELEVISION = 'icon-television',
	TV = 'icon-tv',
}

type ListIcon = typeof dataJsonIcons
export const getListIcons = (): ListIcon => dataJsonIcons

interface IconProps {
	className?: string
	name: IconEnumName
	onClick?: () => void
}

export const Icon: FC<IconProps> = ({ name, className = '', onClick }) => {
	return <Wrapper onClick={onClick} className={`icon ${name} ${className}`} />
}
