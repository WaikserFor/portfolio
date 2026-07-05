import './Hero.css'
import hero from '../../assets/images/hero.jpg'
import Reveal from '../Reveal/Reveal'

import { Rocket, Gift, ShieldCheck, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
	return (
		<Reveal>
			<section id='home' className='hero'>
				<div className='heroBackground'></div>

				<div className='heroContainer'>
					<div className='heroText'>
						<div className='heroTop'>
							<span className='heroBadge'>
								<Rocket size={16} />
								CRYPTO • TRADING
							</span>
						</div>

						<h1 className='heroTitle'>
							<span className='titleWhite'>KIRILL</span>

							<span className='titleGradient'>WAIK</span>
						</h1>

						<p className='heroDescription'>
							Создаю собственную крипто-экосистему, объединяю трейдеров,
							развиваю Web3-проекты и помогаю людям зарабатывать вместе со мной.
						</p>

						<div className='heroButtons'>
							<a
								href='https://t.me/Waikser'
								target='_blank'
								rel='noreferrer'
								className='primaryBtn'
							>
								Telegram
							</a>

							<a
								href='https://www.bitunix.com/register?vipCode=Waik'
								target='_blank'
								rel='noreferrer'
								className='secondaryBtn'
							>
								<Gift size={18} />
								Бонус Bitunix
							</a>
						</div>

						<div className='heroStats'>
							<div className='stat'>
								<h3>5+</h3>
								<span>Проектов</span>
							</div>

							<div className='stat'>
								<h3>24/7</h3>
								<span>Поддержка</span>
							</div>

							<div className='stat'>
								<h3>Web3</h3>
								<span>Экосистема</span>
							</div>
						</div>

						<div className='heroHighlights'>
							<div className='highlightItem'>
								<span className='highlightIcon'>🛡</span>
								<span>Official Bitunix Partner</span>
							</div>

							<div className='highlightItem'>
								<span className='highlightIcon'>👥</span>
								<span>Crypto Community</span>
							</div>

							<div className='highlightItem full'>
								<span className='highlightIcon'>🚀</span>
								<span>Web3 Builder</span>
							</div>
						</div>
					</div>

					<div className='heroImage'>
						<div className='heroGlow'></div>

						<div className='heroCircle'></div>

						<img src={hero} alt='Kirill Waik' className='heroPhoto' />
					</div>
				</div>

				<div className='scrollIndicator'>
					<span></span>
				</div>
			</section>
		</Reveal>
	)
}
