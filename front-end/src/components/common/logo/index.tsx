import React, { FC } from 'react'
import styled from 'styled-components'
import logo from '../../../assets/dazn.svg'

const Img = styled.img`
	width: 35px;
	height: 35px;
`

export const Logo: FC = () => {
	return <Img src={logo} />
}
