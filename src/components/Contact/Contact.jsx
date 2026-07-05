import './Contact.css'
import Reveal from '../Reveal/Reveal'

export default function Contact() {
	return (
		<section id='contact' className='contact'>
			<Reveal>
				<div className='contactCard'>
					<span className='contactBadge'>📩 Всегда на связи</span>

					<h2>Свяжитесь со мной</h2>

					<p>
						По вопросам сотрудничества, криптовалют, партнерства, рекламы или
						участия в проектах — пишите в Telegram или Instagram. Отвечаю лично.
					</p>

					<div className='contactButtons'>
						<a
							href='https://t.me/Waikser'
							target='_blank'
							rel='noreferrer'
							className='contactPrimary'
						>
							Telegram
						</a>

						<a
							href='https://instagram.com/kirillwaikbydfi'
							target='_blank'
							rel='noreferrer'
							className='contactSecondary'
						>
							Instagram
						</a>
					</div>
				</div>
			</Reveal>
		</section>
	)
}
