import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Container, Input, Modal, OwlCarousel, OwlCarouselItem, Tile } from '../../components'
import { Loading } from '../../layout'

const Title = styled.h1`
	padding-bottom: 20px;
	font-size: ${({ theme }) => theme.fontSize.huge};
	font-weight: bold;
`
const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSize.big};
`

const ButtonSettings = styled(Button)`
	margin: 10px;
`

const Content = styled(Container)`
	flex-direction: column;
	padding: 20px;
	gap: 50px;

	${({ theme }) => theme.breakpoints.tablet} {
		flex-direction: row;
	}
`

const List = styled.ul`
	list-style: number;
	padding-left: 20px;
`
const handleCreateNewCard = (card: { title?: string; description?: string; image: string }, setTiles: (data: any) => void) => {
	axios
		.post(`http://localhost:8080/card`, card)
		.then(({ data }) => setTiles(data))
		.catch(e => console.error(JSON.stringify(e)))
}

export const Home: FC = () => {
	const [tiles, setTiles] = useState([])
	const [loading, setLoading] = useState(false)
	const [showSettings, setShowSettings] = useState(false)
	const [newTitle, setNewTitle] = useState('')
	const [newDescription, setNewDescription] = useState('')
	const [newImage, setNewImage] = useState(
		'https://image.discovery.indazn.com/eu/v2/eu/image/?id=127932485798_image-header_pRow_1638701427000&quality=85&width=334&height=187&resizeAction=fill&verticalAlignment=top&format=jpg',
	)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		setLoading(true)
		axios
			.get('http://localhost:8080/cards')
			.then(({ data }) => {
				setLoading(false)
				setTiles(data)
			})
			.catch(e => {
				setLoading(false)
				console.error(JSON.stringify(e))
			})
	}, [])

	if (loading) {
		return <Loading />
	}

	return (
		<>
			<OwlCarousel>
				{tiles.map(({ title, description, id, image }) => {
					return (
						<OwlCarouselItem key={id}>
							<Tile image={image} title={title} description={description} showSettings={showSettings} id={id} setTiles={setTiles} />
						</OwlCarouselItem>
					)
				})}
			</OwlCarousel>
			<Container>
				<ButtonSettings onClick={() => setShowSettings(!showSettings)}>{showSettings ? 'hide' : 'show'} settings</ButtonSettings>
				<ButtonSettings onClick={() => setShowModal(true)}>Create new card</ButtonSettings>
			</Container>
			<Modal showModal={showModal}>
				<Input required placeholder="Type title" type="text" value={newTitle} onChange={setNewTitle} />
				<Input required placeholder="Type description" type="text" value={newDescription} onChange={setNewDescription} />
				<Input required placeholder="Type image url" type="text" value={newImage} onChange={setNewImage} />
				<ButtonSettings
					onClick={() => {
						handleCreateNewCard({ title: newTitle, description: newDescription, image: newImage }, setTiles)
						setShowModal(false)
					}}
				>
					Save changes
				</ButtonSettings>
				<ButtonSettings onClick={() => setShowModal(false)}>Cancle</ButtonSettings>
			</Modal>
			<Content>
				<div>
					<Title>Frontend tasks</Title>
					<Description>
						<List>
							<li>setup eslint with prettier by your self</li>
							<li>try to create navigation with routing, submenus and search bar</li>
							<li>create responsivity for your navigation</li>
							<li>create routing by react-router-dom</li>
							<li>store active opened submenu in localstorage after refresh user will have same state of the visibility submenus</li>
							<li>choose one component and create simple unit test by jest</li>
							<li>create repair custom hook in folder hooks</li>
						</List>
					</Description>
				</div>
				<div>
					<Title>Backend tasks</Title>
					<Description>
						<List>
							<li> create back-end where you can load all cards from data.json</li>
							<li> create delete api call for removing one card from data.json</li>
							<li> create put api call for edit some information regarding one card from data.json</li>
							<li> create post api call for creating new card with custom title, description and image url</li>
							<li> create validation for every api request with correct status code</li>
						</List>
					</Description>
				</div>
			</Content>
		</>
	)
}
