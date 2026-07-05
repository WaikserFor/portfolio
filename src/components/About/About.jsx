import './About.css'
import Reveal from '../Reveal/Reveal'

import {
	Hand,
	Target,
	TrendingUp,
	Globe,
	Handshake,
	Rocket,
	Diamond,
	Shield,
	Bot,
	Shirt,
} from 'lucide-react'

export default function About() {
	return (
		<section id='about' className='about'>
			<Reveal>
				<h2>Обо мне</h2>

				<div className='aboutGrid'>
					<div className='aboutCard'>
						<h3>
							<Hand size={24} />
							Кто я
						</h3>

						<p>
							Меня зовут <strong>Кирилл (WAIK)</strong>.
						</p>

						<p>
							Развиваюсь в сфере криптовалют, Web3, трейдинга и
							digital-проектов.
						</p>

						<p>
							Создаю собственную экосистему, объединяю сильное сообщество и
							делюсь практическим опытом.
						</p>
					</div>

					<div className='aboutCard'>
						<h3>
							<Target size={24} />
							Основные направления
						</h3>

						<ul>
							<li>
								<TrendingUp size={18} />
								Криптовалюты
							</li>

							<li>
								<Globe size={18} />
								Web3
							</li>

							<li>
								<Handshake size={18} />
								Affiliate Marketing
							</li>

							<li>
								<Rocket size={18} />
								Digital Products
							</li>
						</ul>
					</div>

					<div className='aboutCard aboutWide'>
						<h3>
							<Rocket size={24} />
							Сейчас развиваю
						</h3>

						<div className='aboutTags'>
							<span>
								<Diamond size={16} />
								Bitunix Partner
							</span>

							<span>
								<Shield size={16} />
								WaikVPN
							</span>

							<span>
								<TrendingUp size={16} />
								Traders Club
							</span>

							<span>
								<Bot size={16} />
								Copy Trading
							</span>

							<span>
								<Shirt size={16} />
								WAIK Merch
							</span>
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	)
}
