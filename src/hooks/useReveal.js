import { useInView } from 'react-intersection-observer'

export default function useReveal() {
	const [ref, inView] = useInView({
		triggerOnce: true,

		threshold: 0.15,
	})

	return { ref, inView }
}
