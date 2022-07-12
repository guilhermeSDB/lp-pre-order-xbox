var slideUp = {
    distance: '0px',
    origin: 'bottom',
    opacity: 0.8,
    scale: 0.60,
    duration: 1000,
    delay: 200
}

var slideDown = {
    distance: '100px',
    origin: 'top',
    opacity: 0.8,
    scale: 0.60,
    duration: 3000,
    delay: 150
}

ScrollReveal().reveal("#first-section", slideUp)
ScrollReveal().reveal(".section__texts", slideDown)
ScrollReveal().reveal(".card", { origin: 'left', distance: '300px', delay: 200, duration: 1000, easing: 'ease-in' })
ScrollReveal().reveal("figure", { origin: 'right', delay: 200, distance: '100px', scale: 0.85 , duration: 1800,  })
