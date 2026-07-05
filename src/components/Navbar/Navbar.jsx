import './Navbar.css'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [active, setActive] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40)

			const sections = ['about', 'projects', 'services', 'contact']

			let current = ''

			sections.forEach(id => {
				const section = document.getElementById(id)

				if (section && window.scrollY >= section.offsetTop - 140) {
					current = id
				}
			})

			setActive(current)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
			<div className='navbarContainer'>
				<a href='#home' className='logo'>
					WAIK
				</a>

				<nav className='navLinks'>
					<a href='#about' className={active === 'about' ? 'active' : ''}>
						Обо мне
					</a>

					<a href='#projects' className={active === 'projects' ? 'active' : ''}>
						Проекты
					</a>

					<a href='#services' className={active === 'services' ? 'active' : ''}>
						Услуги
					</a>

					<a href='#contact' className={active === 'contact' ? 'active' : ''}>
						Контакты
					</a>
				</nav>

				<div className='navButtons'>
					<a
						href='https://t.me/waikser'
						target='_blank'
						rel='noreferrer'
						className='telegramBtn'
					>
						Telegram
					</a>

					<a
						href='https://instagram.com/kirillWaik'
						target='_blank'
						rel='noreferrer'
						className='instagramBtn'
					>
						Instagram
					</a>
				</div>
			</div>
		</header>
	)
}
