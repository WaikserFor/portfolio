import './Footer.css'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='footerContainer'>
				<a href='#home' className='footerLogo'>
					WAIK
				</a>

				<p className='footerText'>Crypto • Web3 • Trading</p>

				<div className='footerSocials'>
					<a href='https://t.me/Waikser' target='_blank' rel='noreferrer'>
						Telegram
					</a>

					<a
						href='https://instagram.com/kirillwaikbydfi'
						target='_blank'
						rel='noreferrer'
					>
						Instagram
					</a>
				</div>

				<p className='footerCopy'>© {year} WAIK. All rights reserved.</p>
			</div>
		</footer>
	)
}
