import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Send,
  Instagram,
  ShieldCheck,
  Orbit,
  Zap,
  ChartNoAxesCombined,
  Bot,
  Shirt,
  Check,
  Sparkles,
  CircleDot,
} from 'lucide-react'
import { content, LINKS } from './content'
import portrait from './assets/hero.jpg'
import bitunixLogo from './assets/bitunix.png'
import { navigateToSection } from './navigation'

const sections = ['about', 'projects', 'services', 'contact']
const iconMap = {
  orbit: Orbit,
  zap: Zap,
  chart: ChartNoAxesCombined,
  bot: Bot,
  shirt: Shirt,
  shield: ShieldCheck,
}

function CardIcon({ name, size = 23 }) {
  const Icon = iconMap[name] || CircleDot
  return <Icon size={size} strokeWidth={1.7} />
}

function External({ href, children, className = '', ...rest }) {
  return (
    <a className={className} href={href} target='_blank' rel='noopener noreferrer' {...rest}>
      {children}
    </a>
  )
}

function Header({ t, lang, setLang }) {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') setMenu(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    let frame = 0
    const checkActive = () => {
      frame = 0
      const offset = window.scrollY + Math.min(260, window.innerHeight * 0.32)
      let next = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) next = id
      }
      setActive(current => current === next ? current : next)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(checkActive)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className='nav-shell'>
        <a
          href='#home'
          className='wordmark'
          onClick={event => {
            navigateToSection(event, 'home')
            setMenu(false)
          }}
        >
          WAIK
          <span className='wordmark-dot'>.</span>
        </a>

        <nav className={`nav-links ${menu ? 'menu-open' : ''}`} aria-label='Main navigation'>
          {sections.map((id, index) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
              onClick={event => {
                navigateToSection(event, id)
                setMenu(false)
              }}
            >
              {t.nav[index]}
            </a>
          ))}

          <div className='mobile-nav-contact'>
            <External href={LINKS.telegram}>
              Telegram <ArrowUpRight size={16} />
            </External>
          </div>
        </nav>

        <div className='nav-actions'>
          <button
            type='button'
            className='language-switch'
            role='switch'
            aria-checked={lang === 'en'}
            aria-label='Switch website language'
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            <span className='language-knob' />
            <span className={`language-option ${lang === 'ru' ? 'selected' : ''}`}>RU</span>
            <span className={`language-option ${lang === 'en' ? 'selected' : ''}`}>EN</span>
          </button>

          <External href={LINKS.telegram} className='nav-contact'>
            Telegram <ArrowUpRight size={15} />
          </External>

          <button
            className='menu-button'
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function SectionHeading({ label, title, description }) {
  return (
    <div className='section-heading'>
      <div>
        <p className='eyebrow'>
          <span className='eyebrow-line' />
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className='section-lead'>{description}</p>}
    </div>
  )
}

function Hero({ t }) {
  return (
    <section id='home' className='hero'>
      <div className='page-wrap hero-inner'>
        <div className='hero-copy'>
          <div className='hero-kicker'>{t.heroLabel}</div>

          <h1>
            {t.heroLead}
            <br />
            <span>{t.heroAccent}</span>
          </h1>

          <p className='hero-description'>{t.heroText}</p>

          <div className='hero-ctas'>
            <External href={LINKS.telegram} className='btn btn-primary'>
              {t.heroPrimary}
              <ArrowUpRight size={19} />
            </External>

            <a
              href='#projects'
              onClick={event => navigateToSection(event, 'projects')}
              className='btn btn-quiet'
            >
              {t.heroSecondary}
              <ArrowRight size={19} />
            </a>
          </div>

          <div className='availability'>
            <span className='availability-dot' />
            {t.availability}
          </div>

          <div className='hero-meta'>
            <span>
              <Check size={15} />
              {t.heroChip1}
            </span>
            <span>
              <Check size={15} />
              {t.heroChip2}
            </span>
            <span>
              <Check size={15} />
              {t.heroChip3}
            </span>
          </div>

                  </div>

        <div className='portrait-frame'>
          <div className='portrait-aura' />
          <div className='portrait-arch'>
            <img src={portrait} alt='Kirill WAIK' decoding='async' />
          </div>
          <div className='portrait-footer'>
            <div>
              <span className='portrait-small'>FOUNDER / DIGITAL CREATOR</span>
              <strong>KIRILL WAIK</strong>
            </div>
            <span className='portrait-mark'>W.</span>
          </div>
        </div>
      </div>

      <a
        className='scroll-mouse'
        href='#about'
        onClick={event => navigateToSection(event, 'about')}
        aria-label={t.heroScroll}
      >
        <span className='scroll-mouse-track' aria-hidden='true'>
          <span className='scroll-mouse-wheel' />
        </span>
        <span className='sr-only'>{t.heroScroll}</span>
      </a>
    </section>
  )
}

function About({ t }) {
  return (
    <section className='section about' id='about'>
      <div className='page-wrap'>
        <SectionHeading label={t.sectionAbout} title={t.aboutTitle} description={t.aboutIntro} />

        <div className='about-grid'>
          <article className='about-primary premium-panel'>
            <div className='panel-meta'>
              <span>{t.aboutEyebrow}</span>
              <Sparkles size={18} />
            </div>

            <h3>{t.aboutHeading}</h3>
            <p>{t.aboutBody}</p>
            <div className='about-signature'>
              WAIK
              <span>.</span>
            </div>
          </article>

          <div className='about-side'>
            <article className='about-focus premium-panel'>
              <span className='micro-label'>{t.focusLabel}</span>
              <div className='focus-list'>
                {t.focus.map(item => (
                  <div key={item}>
                    <span className='focus-bullet' />
                    <span>{item}</span>
                    <ArrowUpRight size={17} />
                  </div>
                ))}
              </div>
            </article>

            <article className='about-now premium-panel'>
              <span className='micro-label'>{t.nowLabel}</span>
              <div className='now-content'>
                <div className='now-symbol'>
                  <Orbit size={27} strokeWidth={1.4} />
                </div>
                <div>
                  <h3>{t.nowTitle}</h3>
                  <p>{t.nowBody}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommunityDirection({ project, index, isOpen, onEnter, onLeave, onToggle, moreLabel }) {
  const detailsId = `community-details-${index}`
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  // Animate between real pixel heights, so opening and closing are smooth
  // even when descriptions wrap differently on mobile or in English.
  useLayoutEffect(() => {
    const element = contentRef.current
    if (!element) return

    const measure = () => {
      const nextHeight = Math.ceil(element.getBoundingClientRect().height)
      setContentHeight(previous => previous === nextHeight ? previous : nextHeight)
    }

    measure()
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    observer?.observe(element)
    window.addEventListener('resize', measure)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [project.desc, project.title, project.tags.join('|')])

  return (
    <div
      className={`community-entry ${isOpen ? 'is-expanded' : ''}`}
      onPointerEnter={event => { if (event.pointerType === 'mouse') onEnter(index) }}
      onPointerLeave={event => { if (event.pointerType === 'mouse') onLeave(index) }}
    >
      <h3 className='community-entry-heading'>
        <button
          className='community-entry-toggle'
          type='button'
          aria-expanded={isOpen}
          aria-controls={detailsId}
          onClick={() => onToggle(index)}
        >
          <span className='community-entry-icon'><CardIcon name={project.icon} size={24} /></span>
          <span className='community-entry-name'>
            <span className='community-entry-title'>{project.title}</span>
            <span className='community-entry-type'>{project.topic}</span>
          </span>
          <span className='community-entry-arrow' aria-hidden='true'>
            <ArrowUpRight size={21} strokeWidth={1.65} />
          </span>
        </button>
      </h3>
      <div
        className='community-entry-details'
        id={detailsId}
        aria-hidden={!isOpen}
        style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className='community-entry-details-inner' ref={contentRef}>
          <div className='community-entry-description'>
            <p>{project.desc}</p>
            <div className='community-entry-tags'>
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <External href={LINKS.telegram} className='community-entry-link' tabIndex={isOpen ? 0 : -1}>
              {moreLabel}<ArrowUpRight size={15} />
            </External>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects({ t }) {
  const [opened, setOpened] = useState(null)
  const hoverTimer = useRef(null)

  const cancelHover = () => {
    if (hoverTimer.current != null) clearTimeout(hoverTimer.current)
    hoverTimer.current = null
  }

  useEffect(() => () => {
    if (hoverTimer.current != null) clearTimeout(hoverTimer.current)
  }, [])

  const onEnter = index => {
    cancelHover()
    hoverTimer.current = setTimeout(() => setOpened(index), 85)
  }

  const onLeave = index => {
    cancelHover()
    // Grace period avoids flicker when crossing the gap between directions.
    hoverTimer.current = setTimeout(() => setOpened(current => current === index ? null : current), 170)
  }

  const onToggle = index => {
    cancelHover()
    setOpened(current => current === index ? null : index)
  }

  return (
    <section className='section projects community-section' id='projects'>
      <div className='page-wrap'>
        <div className='community-stage'>
          <div className='community-visual' aria-hidden='true'>
            <div className='community-orbit community-orbit--outer' />
            <div className='community-orbit community-orbit--inner' />
            <div className='community-orbit-core' />
          </div>
          <div className='community-intro'>
            <p className='community-eyebrow'><span className='community-eyebrow-line' />{t.sectionProjects}</p>
            <h2>{t.projectsTitle}</h2>
            <p className='community-lead'>{t.projectsSubtitle}</p>
          </div>
          <div className='community-explorer' aria-label={t.projectsTitle}>
            {t.projects.map((project, index) => (
              <CommunityDirection
                key={project.title}
                project={project}
                index={index}
                isOpen={opened === index}
                onEnter={onEnter}
                onLeave={onLeave}
                onToggle={onToggle}
                moreLabel={t.projectMore}
              />
            ))}
          </div>
          <div className='community-footnote'>
            <span className='community-footnote-dot' />
            {t.projectsHint}
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnerCard({ type, t }) {
  const isBitunix = type === 'bitunix'
  const card = t.services[type]
  const href = LINKS[type]

  return (
    <article className={`partner-card premium-panel ${type}`}>
      <div className='partner-top'>
        <div className={`partner-identity ${type}`}>
          {isBitunix ? (
            <img src={bitunixLogo} alt='Bitunix logo' loading='lazy' decoding='async' />
          ) : (
            <div className='pu-monogram'>
              PU
              <span>.</span>
            </div>
          )}
        </div>

        <span className='partner-pill'>
          <span /> {t.partnerBadge}
        </span>
      </div>

      <div className='partner-body'>
        <div className='partner-overline'>
          {isBitunix ? 'DIGITAL ASSET EXCHANGE' : 'GLOBAL BROKERAGE PLATFORM'}
        </div>
        <h3>{isBitunix ? 'Bitunix' : 'PU Prime'}</h3>
        <p>{card.desc}</p>

        <div className='partner-points'>
          {card.points.map(point => (
            <span key={point}>
              <Check size={15} />
              {point}
            </span>
          ))}
        </div>
      </div>

      <External href={href} className='partner-link'>
        {card.cta}
        <ArrowUpRight size={20} />
      </External>
    </article>
  )
}

function ProductCard({ id, t, lang }) {
  const meta = {
    vpn: {
      name: 'WAIK VPN',
      icon: 'shield',
      badge: t.liveBadge,
      status: 'live',
      link: LINKS.vpn,
      accent: 'vpn',
      kicker: lang === 'ru' ? 'SECURE ACCESS' : 'SECURE ACCESS',
      tags: lang === 'ru' ? ['Telegram', 'Private DNS'] : ['Telegram', 'Private DNS'],
    },
    group: {
      name: t.services.group.title,
      icon: 'chart',
      badge: t.liveBadge,
      status: 'live',
      link: LINKS.telegram,
      accent: 'group',
      kicker: lang === 'ru' ? 'PRIVATE COMMUNITY' : 'PRIVATE COMMUNITY',
      tags: lang === 'ru' ? ['Insights', 'Discussion'] : ['Insights', 'Discussion'],
    },
    copy: {
      name: t.services.copy.title,
      icon: 'bot',
      badge: t.soonBadge,
      status: 'soon',
      link: LINKS.telegram,
      accent: 'copy',
      kicker: lang === 'ru' ? 'AUTOMATION' : 'AUTOMATION',
      tags: lang === 'ru' ? ['Signals', 'Execution'] : ['Signals', 'Execution'],
    },
    merch: {
      name: t.services.merch.title,
      icon: 'shirt',
      badge: t.soonBadge,
      status: 'soon',
      link: LINKS.telegram,
      accent: 'merch',
      kicker: lang === 'ru' ? 'LIMITED DROP' : 'LIMITED DROP',
      tags: lang === 'ru' ? ['Brand', 'Community'] : ['Brand', 'Community'],
    },
  }[id]

  const details = t.services[id]

  return (
    <article className={`product-card premium-panel accent-${meta.accent}`}>
      <div className='product-upper'>
        <div className='product-icon'>
          <CardIcon name={meta.icon} size={25} />
        </div>

        <span className={`status-chip ${meta.status}`}>
          <span />
          {meta.badge}
        </span>
      </div>

      <div className='product-body'>
        <span className='product-kicker'>{meta.kicker}</span>
        <h3>{meta.name}</h3>
        <p>{details.desc}</p>
      </div>

      <div className='product-footer'>
        <div className='product-tags'>
          {meta.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <External href={meta.link} className='product-link'>
          {details.cta}
          <ArrowUpRight size={18} />
        </External>
      </div>
    </article>
  )
}

function Services({ t, lang }) {
  return (
    <section className='section services' id='services'>
      <div className='page-wrap'>
        <SectionHeading label={t.sectionServices} title={t.servicesTitle} description={t.servicesSubtitle} />

        <div className='subhead'>
          <span>{t.partnersTitle}</span>
        </div>
        <div className='partners-grid'>
          <PartnerCard type='bitunix' t={t} />
          <PartnerCard type='puprime' t={t} />
        </div>

        <div className='subhead products-subhead'>
          <span>{t.productsTitle}</span>
        </div>
        <div className='products-grid'>
          {['vpn', 'group', 'copy', 'merch'].map(id => (
            <ProductCard key={id} id={id} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  return (
    <section className='section contact-section' id='contact'>
      <div className='page-wrap'>
        <div className='contact-box premium-panel'>
          <div className='contact-top'>
            <span className='eyebrow'>
              <span className='eyebrow-line' />
              {t.sectionContact}
            </span>
            <span className='contact-asterisk'>✳</span>
          </div>

          <div className='contact-main'>
            <div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>

            <External href={LINKS.telegram} className='contact-big-link'>
              <ArrowUpRight size={27} />
            </External>
          </div>

          <div className='contact-footer'>
            <External href={LINKS.telegram}>
              <Send size={17} />
              {t.contactCta}
              <ArrowUpRight size={16} />
            </External>

            <External href={LINKS.instagram}>
              <Instagram size={17} />
              Instagram
              <ArrowUpRight size={16} />
            </External>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className='footer'>
      <div className='page-wrap footer-inner'>
        <div>
          <span className='footer-brand'>
            WAIK
            <span>.</span>
          </span>
          <p>{t.footerNote}</p>
        </div>

        <div className='footer-right'>
          <span>
            © {new Date().getFullYear()} WAIK. {t.footerRights}
          </span>
          <a href='#home' onClick={event => navigateToSection(event, 'home')}>
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

function FloatingTelegram() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const update = () => setShown(window.scrollY > 420)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <External href={LINKS.telegram} className={`floating-telegram ${shown ? 'show' : ''}`}>
      <Send size={23} fill='currentColor' />
      <span className='sr-only'>Telegram</span>
    </External>
  )
}

/** Ambient cursor glow. DOM motion rather than React state keeps hover smooth. */
function CursorHalo() {
  const haloRef = useRef(null)

  useEffect(() => {
    const halo = haloRef.current
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!halo || !finePointer.matches || reducedMotion.matches) return

    let frame = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY
    let radius = halo.offsetWidth / 2

    const paint = () => {
      x += (targetX - x) * 0.085
      y += (targetY - y) * 0.085
      halo.style.transform = `translate3d(${x - radius}px, ${y - radius}px, 0)`

      if (Math.abs(targetX - x) > 0.25 || Math.abs(targetY - y) > 0.25) {
        frame = requestAnimationFrame(paint)
      } else {
        frame = 0
      }
    }

    const move = event => {
      if (event.pointerType && event.pointerType !== 'mouse') return
      targetX = event.clientX
      targetY = event.clientY
      halo.classList.add('is-visible')
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const hide = () => halo.classList.remove('is-visible')
    const resize = () => { radius = halo.offsetWidth / 2 }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseleave', hide)
    window.addEventListener('blur', hide)
    window.addEventListener('resize', resize, { passive: true })

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
      window.removeEventListener('blur', hide)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={haloRef} className='cursor-halo' aria-hidden='true' />
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('waik-lang') === 'en' ? 'en' : 'ru'
    } catch {
      return 'ru'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('waik-lang', lang)
    } catch {}
  }, [lang])

  useLayoutEffect(() => {
    // Single reveal observer. Paint a hidden frame BEFORE activating visible
    // items, or the browser may coalesce the state changes and show no motion.
    document.documentElement.dataset.waikVersion = '20'
    const items = [...document.querySelectorAll(
      '.hero-copy,.portrait-frame,.section-heading,.about-primary,.about-focus,.about-now,.community-stage,.community-entry,.community-footnote,.partner-card,.product-card,.contact-box,.subhead'
    )]
    let observer = null
    let frameOne = null
    let frameTwo = null

    items.forEach((item, index) => {
      // Stagger within each section, not over the entire document.
      const siblings = [...(item.parentElement?.children ?? [])].filter(node => items.includes(node))
      const siblingIndex = Math.max(0, siblings.indexOf(item))
      item.style.setProperty('--waik-enter-delay', `${Math.min(siblingIndex, 3) * 115}ms`)
      item.classList.add('waik-reveal')
    })

    const reveal = item => {
      if (item.classList.contains('waik-visible')) return
      item.classList.add('waik-visible')
      observer?.unobserve(item)
    }

    // Force style calculation while elements are still hidden.
    // Then enter on a later painted frame, preventing instant snap-in.
    if (items.length) void items[0].getBoundingClientRect().top
    frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        if (!('IntersectionObserver' in window)) {
          items.forEach(reveal)
          return
        }
        observer = new IntersectionObserver(entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal(entry.target)
          }
        }, {threshold: 0.08, rootMargin: '0px 0px -9% 0px'})
        items.forEach(item => observer.observe(item))
      })
    })

    return () => {
      cancelAnimationFrame(frameOne)
      cancelAnimationFrame(frameTwo)
      observer?.disconnect()
      items.forEach(item => {
        item.classList.remove('waik-reveal', 'waik-visible')
        item.style.removeProperty('--waik-enter-delay')
      })
    }
  }, [])

  useEffect(() => {
    // On touch devices no pointer tracking or frame-by-frame progress writes.
    // This avoids forcing style recalculation while the user scrolls.
    const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!precisePointer) return

    const panels = [...document.querySelectorAll('.premium-panel')]
    const moveHandlers = panels.map(panel => {
      let pending = 0
      let x = 50
      let y = 35
      const handleMove = event => {
        const bounds = panel.getBoundingClientRect()
        if (!bounds.width || !bounds.height) return
        x = ((event.clientX - bounds.left) / bounds.width) * 100
        y = ((event.clientY - bounds.top) / bounds.height) * 100
        if (pending) return
        pending = requestAnimationFrame(() => {
          panel.style.setProperty('--mx', `${x}%`)
          panel.style.setProperty('--my', `${y}%`)
          pending = 0
        })
      }
      panel.addEventListener('pointermove', handleMove, { passive: true })
      return () => {
        panel.removeEventListener('pointermove', handleMove)
        if (pending) cancelAnimationFrame(pending)
      }
    })

    // The thin desktop scroll indicator is painted once per frame at most.
    let progressFrame = 0
    const onScroll = () => {
      if (progressFrame) return
      progressFrame = requestAnimationFrame(() => {
        const remaining = document.documentElement.scrollHeight - innerHeight
        document.documentElement.style.setProperty('--scroll-progress', `${Math.min(100, scrollY / Math.max(1, remaining) * 100)}%`)
        progressFrame = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      moveHandlers.forEach(dispose => dispose())
      window.removeEventListener('scroll', onScroll)
      if (progressFrame) cancelAnimationFrame(progressFrame)
    }
  }, [])

  const t = content[lang]

  return (
    <>
      <div className='page-ambient' />
      <CursorHalo />
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Services t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <FloatingTelegram />
    </>
  )
}
