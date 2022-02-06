import axios from 'axios'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '..'
import { hexToRgba } from '../../utils'

const Wrapper = styled.div`
	display: inline-block;
	padding: 8px;
	width: 100%;
	min-height: 150px;

	&:hover {
		transform: scale(1.05);
	}
`

const Image = styled.img`
	margin-bottom: 8px;
`

const Title = styled.h4`
	font-size: ${({ theme }) => theme.fontSize.medium};
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	margin-bottom: 2px;
`

const Settings = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	padding: 10px;
	background-color: ${({ theme }) => hexToRgba(theme.colors.white, 0.3)};
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Description = styled.p``

interface TileProps {
	image: string
	title: string
	description: string
	id: string
	showSettings: boolean
	setTiles: (data: any) => void
}

const handleRemoveTile = async (id: string, setTiles: (data: any) => void) => {
	axios
		.delete(`http://localhost:8080/card/${id}`)
		.then(({ data }) => setTiles(data))
		.catch(e => console.error(JSON.stringify(e)))
}

const handleSubmit = (card: { title?: string; description?: string; id: string; image: string }, setTiles: (data: any) => void) => {
	axios
		.put(`http://localhost:8080/card`, card)
		.then(({ data }) => setTiles(data))
		.catch(e => console.error(JSON.stringify(e)))
}

export const Tile: FC<TileProps> = ({ image, title, description, showSettings, id, setTiles }) => {
	const [titleValue, setTitleValue] = useState(title)
	const [descriptionValue, setDescriptionValue] = useState(description)

	return (
		<Wrapper>
			{showSettings && (
				<Settings>
					<Button onClick={() => handleRemoveTile(id, setTiles)}>Delete tile</Button>
					<Input required type="text" placeholder="type title" value={titleValue} onChange={setTitleValue} />
					<Input required type="text" placeholder="type description" value={descriptionValue} onChange={setDescriptionValue} />
					<Button onClick={() => handleSubmit({ title: titleValue, description: descriptionValue, id, image }, setTiles)}>Save changes</Button>
				</Settings>
			)}
			<div style={{ flex: 1 }}>
				<Image src={image} alt="image" />
			</div>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Wrapper>
	)
}
