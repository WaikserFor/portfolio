/** One predictable animation for every in-page link.
 * The previous version used native smooth scrolling, but switched to instant
 * whenever the operating system requested reduced motion. In addition,
 * competing scroll-behavior CSS rules made behavior difficult to diagnose.
 * We now animate frame-by-frame, without changing the URL fragment mid-scroll.
 */
let animationFrame = null
let clearListeners = () => {}

export function navigateToSection(event, id) {
  if (event && (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) return
  event?.preventDefault()
  const target = document.getElementById(id)
  if (!target) return

  if (animationFrame !== null) cancelAnimationFrame(animationFrame)
  clearListeners()

  const startY = window.scrollY
  const header = document.querySelector('.nav-shell')
  const headerHeight = header?.getBoundingClientRect().height ?? 72
  const desiredY = id === 'home'
    ? 0
    : window.scrollY + target.getBoundingClientRect().top - headerHeight - 34
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  const endY = Math.max(0, Math.min(desiredY, maxY))
  const distance = endY - startY
  if (Math.abs(distance) < 2) return

  // Even with OS reduced-motion enabled, use a short gentle transition
  // rather than the former abrupt jump. Keep the normal version cinematic.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = reduced ? 600 : Math.min(1450, Math.max(900, 750 + Math.abs(distance) * 0.23))
  let begunAt = null
  let cancelled = false

  const stop = () => {
    cancelled = true
    if (animationFrame !== null) cancelAnimationFrame(animationFrame)
    animationFrame = null
    clearListeners()
  }
  const options = { passive: true }
  window.addEventListener('wheel', stop, options)
  window.addEventListener('touchstart', stop, options)
  window.addEventListener('keydown', stop)
  clearListeners = () => {
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    window.removeEventListener('keydown', stop)
    clearListeners = () => {}
  }

  const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2
  const frame = time => {
    if (cancelled) return
    if (begunAt === null) begunAt = time
    const progress = Math.min((time - begunAt) / duration, 1)
    window.scrollTo(0, startY + distance * ease(progress))
    if (progress < 1) {
      animationFrame = requestAnimationFrame(frame)
    } else {
      animationFrame = null
      clearListeners()
    }
  }
  animationFrame = requestAnimationFrame(frame)
}
