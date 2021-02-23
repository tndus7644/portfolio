
export const setScrollEvent = (el, className, point) => {
    window.addEventListener('scroll', () => {
        const sct = window.scrollY || window.pageYOffset
        if (sct > point) {
            el.classList.add(className)
        } else {
            el.classList.remove(className)
        }
    })
}