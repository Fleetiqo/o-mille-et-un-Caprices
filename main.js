// Mobile menu
const navToggle = document.querySelector('.nav-toggle')
const navMenu   = document.querySelector('.nav-menu')
const navLinks  = document.querySelectorAll('.nav-links a')

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  navMenu.classList.toggle('active')
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : ''
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
    document.body.style.overflow = ''
  })
})

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
    navToggle.classList.remove('active')
    navMenu.classList.remove('active')
    document.body.style.overflow = ''
  }
})

// Navbar scroll
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.pageYOffset > 80))

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    const t = document.querySelector(a.getAttribute('href'))
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' })

document.querySelectorAll('.highlight-card, .service-item, .contact-card').forEach((el, i) => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(28px)'
  el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`
  observer.observe(el)
})
