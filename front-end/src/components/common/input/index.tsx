import type { FC } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
	padding: 10px;
	max-width: 150px;
	margin: 0 auto;

	${({ theme }) => theme.breakpoints.tablet} {
		max-width: 200px;
	}
`

const Wrapper = styled.input`
	height: 30px;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.cinder};
	border: 1px solid ${({ theme }) => theme.colors.white};
	padding: 5px 10px;
	font-weight: bold;
	width: 100%;

	&:focus {
		border-color: ${({ theme }) => theme.colors.sunnyYellow};
	}
`

interface InputProps {
	type: 'text' | 'password' | 'number' | 'email'
	required: boolean
	value: string
	className?: string
	placeholder: string
	onChange: (value: string) => void
}

export const Input: FC<InputProps> = ({ value, onChange, type, placeholder, required, className }) => {
	return (
		<InputWrapper className={className}>
			<Wrapper required={required} placeholder={placeholder} type={type} value={value} onChange={e => onChange(e.target.value)} />
		</InputWrapper>
	)
}
