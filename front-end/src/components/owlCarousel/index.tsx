import React, { FC } from 'react'
import styled from 'styled-components'
import { owlStyles } from './owlStyles'
import ReactOwlCarousel from 'react-owl-carousel3'

const Wrapper = styled.div`
	${owlStyles};

	.owl-stage .owl-item:first-child {
		display: none;
	}

	.owl-carousel {
		position: relative;
	}

	.owl-nav {
		width: 100%;
		left: 0;
		bottom: 0;
		height: 0;
		margin: 0 !important;
	}

	.owl-next.disabled,
	.owl-prev.disabled {
		display: none !important;
	}

	.owl-next,
	.owl-prev {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 0 !important;
		margin: 0 !important;
		border-radius: 0 !important;
		background-color: ${({ theme }) => theme.colors.greyGoose} !important;

		svg {
			width: 48px;
			height: 48px;
			fill: ${({ theme }) => theme.colors.white} !important;

			&:hover {
				fill: ${({ theme }) => theme.colors.black} !important;
			}
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.sunnyYellow} !important;
		}
	}

	.owl-prev {
		left: 0;
		transform: translateY(-50%) rotate(180deg);
	}

	.owl-next {
		right: 0;
	}
`

const Item = styled.li`
	list-style: none;
`

export const OwlCarouselItem: FC = ({ children }) => <Item className="item">{children}</Item>

export const OwlCarousel: FC = ({ children }) => {
	return (
		<Wrapper>
			<ReactOwlCarousel
				center={false}
				navText={[
					'<svg viewBox="0 0 240 240"><path d="M148.92 113.664v12.672L81 58.672 93.72 46 168 120l-74.28 74L81 181.328z" fill-rule="nonzero"></path></svg>',
					'<svg viewBox="0 0 240 240"><path d="M148.92 113.664v12.672L81 58.672 93.72 46 168 120l-74.28 74L81 181.328z" fill-rule="nonzero"></path></svg>',
				]}
				dots={false}
				loop={false}
				autoplay={false}
				autoplaySpeed={false}
				autoplayTimeout={0}
				items={6}
				autoplayHoverPause
				startPosition={0}
				slideBy={6}
				navSpeed={500}
				className="owl-theme"
				responsive={{
					0: {
						items: 2,
					},
					600: {
						items: 3,
					},
					960: {
						items: 4,
					},
					1200: {
						items: 6,
					},
				}}
				nav={true}
			>
				{children}
			</ReactOwlCarousel>
		</Wrapper>
	)
}
