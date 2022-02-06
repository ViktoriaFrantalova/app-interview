import { useEffect, useState } from 'react'

export const useClickOutside = (ref: any) => {
	const [active, setActive] = useState(false)

	useEffect(() => {
		const handleClickOutside = (event: { target: any }) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setActive(true)
			}
			setActive(false)
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
	return active
}
