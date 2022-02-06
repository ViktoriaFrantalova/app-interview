import React, { FC } from 'react'
import styled from 'styled-components'
import { Container as ContainerC, ContainerEnumDirection, Description, Title, TitleEnumSize } from '../../components'

const Container = styled(ContainerC)`
	height: 100%;
`

const Content = styled.div`
	max-width: 900px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	word-break: break-word;
`

const ContentBc = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.cinder};
	width: 100%;
	flex: 1;
	overflow-y: auto;
`

const Link = styled.a`
	display: block;
	margin: 5px 0 20px;
	font-weight: bold;

	&:active {
		color: ${({ theme }) => theme.colors.cinder};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.greyGoose};
	}

	&:visited {
		color: ${({ theme }) => theme.colors.thunderbird};
	}
`

export const Links: FC = () => {
	return (
		<Container direction={ContainerEnumDirection.COL}>
			<Content>
				<Title size={TitleEnumSize.H1}>Links</Title>
				<Description>It was use these links for developing.</Description>
			</Content>
			<ContentBc>
				<Content>
					<Description>Create React App: </Description>
					<Link href="https://create-react-app.dev/"> https://create-react-app.dev/</Link>
					<Description>ESLint:</Description>
					<Link href="https://eslint.org/docs/user-guide/getting-started">https://eslint.org/docs/user-guide/getting-started</Link>
					<Description>Styled Components:</Description>
					<Link href="https://styled-components.com/">https://styled-components.com/</Link>
					<Description>TypeScript:</Description>
					<Link href="https://www.typescriptlang.org/docs/handbook/react.html">https://www.typescriptlang.org/docs/handbook/react.html</Link>
					<Description>styled-reset:</Description>
					<Link href="https://www.npmjs.com/package/styled-reset">https://www.npmjs.com/package/styled-reset</Link>
					<Description>Jest:</Description>
					<Link href="https://jestjs.io/docs/configuration">https://jestjs.io/docs/configuration</Link>
				</Content>
			</ContentBc>
		</Container>
	)
}
