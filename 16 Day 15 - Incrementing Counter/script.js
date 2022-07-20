const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 2000

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innText = target
        }
    }

    updateCounter()
})