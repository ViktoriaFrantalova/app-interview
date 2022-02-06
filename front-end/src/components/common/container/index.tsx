import type { FC, RefObject, CSSProperties } from 'react'
import styled from 'styled-components'

export enum ContainerEnumDirection {
	ROW = 'row',
	COL = 'column',
}

export enum ContainerEnumFlexPosition {
	TOP = 'flex-start',
	LEFT = 'flex-start',
	BOTTOM = 'flex-end',
	RIGHT = 'flex-end',
	CENTER = 'center',
}

export interface ContainerProps {
	className?: string
	direction?: ContainerEnumDirection
	x?: ContainerEnumFlexPosition
	y?: ContainerEnumFlexPosition
	refElement?: RefObject<HTMLDivElement> | null
	style?: CSSProperties
}

const Wrapper = styled.div<ContainerProps>`
	display: flex;
	flex-direction: ${({ direction }): string => direction || ContainerEnumDirection.ROW};
	justify-content: ${({ direction, x, y }): string =>
		direction === ContainerEnumDirection.ROW ? x || ContainerEnumFlexPosition.CENTER : y || ContainerEnumFlexPosition.CENTER};
	align-items: ${({ direction, x, y }): string =>
		direction === ContainerEnumDirection.ROW ? y || ContainerEnumFlexPosition.CENTER : x || ContainerEnumFlexPosition.CENTER};
	width: 100%;
`

export const Container: FC<ContainerProps> = ({ children, className, direction, x, y, refElement, style }) => (
	<Wrapper className={className} direction={direction} x={x} y={y} ref={refElement} style={style}>
		{children}
	</Wrapper>
)
