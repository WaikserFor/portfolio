import './Projects.css'
import Reveal from '../Reveal/Reveal'
import portfolio from '../../data/portfolio'

import { Rocket, Flame } from 'lucide-react'

const icons = {
	rocket: <Rocket size={34} strokeWidth={2.3} />,
	flame: <Flame size={34} strokeWidth={2.3} />,
}

export default function Projects() {
	return (
		<section id='projects' className='projects'>
			<Reveal>
				<h2>Мои проекты</h2>

				<div className='projectsGrid'>
					{portfolio.projects.map(project => (
						<div className='projectCard' key={project.title}>
							<div className='projectTop'>
								<div className='projectIcon'>{icons[project.icon]}</div>

								{project.status && (
									<span className='projectStatus'>{project.status}</span>
								)}
							</div>

							<h3>{project.title}</h3>

							<p>{project.description}</p>

							<div className='projectTags'>
								{project.tags.map(tag => (
									<span key={tag}>{tag}</span>
								))}
							</div>

							<a
								href={project.link}
								target='_blank'
								rel='noreferrer'
								className='projectLink'
							>
								Подробнее →
							</a>
						</div>
					))}
				</div>
			</Reveal>
		</section>
	)
}
