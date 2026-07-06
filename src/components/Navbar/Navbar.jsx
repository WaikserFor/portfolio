import './Navbar.css'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [active, setActive] = useState('')
	const [menuOpen, setMenuOpen] = useState(false)

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

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : ''

		const handleKey = e => {
			if (e.key === 'Escape') {
				setMenuOpen(false)
			}
		}

		window.addEventListener('keydown', handleKey)

		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKey)
		}
	}, [menuOpen])

	const closeMenu = () => setMenuOpen(false)

	return (
		<>
			<header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
				<div className='navbarContainer'>
					<a href='#home' className='logo' onClick={closeMenu}>
						WAIK
					</a>

					<nav className='navLinks'>
						<a href='#about' className={active === 'about' ? 'active' : ''}>
							Обо мне
						</a>

						<a
							href='#projects'
							className={active === 'projects' ? 'active' : ''}
						>
							Проекты
						</a>

						<a
							href='#services'
							className={active === 'services' ? 'active' : ''}
						>
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

					<button
						className={`burger ${menuOpen ? 'open' : ''}`}
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label='Menu'
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</header>

			<div className={`mobileMenu ${menuOpen ? 'show' : ''}`}>
				<div className='mobileMenuContent'>
					<a
						href='#about'
						className={active === 'about' ? 'active' : ''}
						onClick={closeMenu}
					>
						Обо мне
					</a>

					<a
						href='#projects'
						className={active === 'projects' ? 'active' : ''}
						onClick={closeMenu}
					>
						Проекты
					</a>

					<a
						href='#services'
						className={active === 'services' ? 'active' : ''}
						onClick={closeMenu}
					>
						Услуги
					</a>

					<a
						href='#contact'
						className={active === 'contact' ? 'active' : ''}
						onClick={closeMenu}
					>
						Контакты
					</a>

					<div className='mobileButtons'>
						<a
							href='https://t.me/waikser'
							target='_blank'
							rel='noreferrer'
							className='telegramBtn'
							onClick={closeMenu}
						>
							Telegram
						</a>

						<a
							href='https://instagram.com/kirillWaik'
							target='_blank'
							rel='noreferrer'
							className='instagramBtn'
							onClick={closeMenu}
						>
							Instagram
						</a>
					</div>
				</div>
			</div>

			{menuOpen && <div className='menuOverlay' onClick={closeMenu} />}
		</>
	)
}
