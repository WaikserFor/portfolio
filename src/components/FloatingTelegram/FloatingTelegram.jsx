import './FloatingTelegram.css'
import { useEffect, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

export default function FloatingTelegram() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 500)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<a
			href='https://t.me/waikser'
			target='_blank'
			rel='noreferrer'
			className={`floatingTelegram ${visible ? 'show' : ''}`}
			aria-label='Telegram'
		>
			<FaTelegramPlane />
		</a>
	)
}
