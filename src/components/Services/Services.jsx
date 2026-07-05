import './Services.css'
import Reveal from '../Reveal/Reveal'
import portfolio from '../../data/portfolio'

import {
	Shield,
	ChartNoAxesCombined,
	Bot,
	Shirt,
	Gift,
	Users,
	MessageCircle,
	Star,
} from 'lucide-react'

const icons = {
	shield: <Shield size={34} strokeWidth={2.2} />,
	chart: <ChartNoAxesCombined size={34} strokeWidth={2.2} />,
	bot: <Bot size={34} strokeWidth={2.2} />,
	shirt: <Shirt size={34} strokeWidth={2.2} />,
}

export default function Services() {
	return (
		<section id='services' className='services'>
			<Reveal>
				<h2>Экосистема WAIK</h2>

				<div className='servicesGrid'>
					{portfolio.services.map(service => (
						<div
							key={service.title}
							className={`serviceCard ${
								service.title === 'Bitunix' ? 'featured' : ''
							}`}
						>
							<div className='serviceTop'>
								<div className='serviceIcon'>
									{icons[service.icon] ? (
										icons[service.icon]
									) : (
										<img src={service.icon} alt={service.title} />
									)}
								</div>

								{service.title === 'Bitunix' ? (
									<span className='partnerBadge'>
										<Star size={14} fill='currentColor' />
										Official Partner
									</span>
								) : (
									<span className={`status ${service.status}`}>
										{service.status}
									</span>
								)}
							</div>

							<h3>{service.title}</h3>

							<p>{service.description}</p>

							{service.title === 'Bitunix' && (
								<ul className='bitunixBenefits'>
									<li>
										<Gift size={18} strokeWidth={2.2} />
										Бонус новым пользователям
									</li>

									<li>
										<Users size={18} strokeWidth={2.2} />
										Бесплатный доступ в приватную группу
									</li>

									<li>
										<MessageCircle size={18} strokeWidth={2.2} />
										Личная поддержка после регистрации
									</li>
								</ul>
							)}

							<a
								href={service.link}
								target='_blank'
								rel='noreferrer'
								className={service.title === 'Bitunix' ? 'bitunixButton' : ''}
							>
								{service.title === 'Bitunix'
									? 'Получить бонус →'
									: 'Подробнее →'}
							</a>
						</div>
					))}
				</div>
			</Reveal>
		</section>
	)
}
