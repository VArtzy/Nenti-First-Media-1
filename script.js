const navbarToggle = document.querySelector(".navbar-toggle")
const navbarMenu = document.querySelector(".items")

navbarToggle.addEventListener("click", () => {
    if (!navbarMenu.style.display) return (navbarMenu.style.display = "block")
    if (navbarMenu.style.display === "none")
        return (navbarMenu.style.display = "block")

    navbarMenu.style.display = "none"
})

// Register IntersectionObserver
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add 'active' class if observation target is inside viewport
            if (entry.target.classList.contains("meter-1")) {
                entry.target.style["transform"] = "rotate(45deg)"
            }
            if (entry.target.classList.contains("meter-2")) {
                entry.target.style["transform"] = "rotate(90deg)"
            }
            if (entry.target.classList.contains("meter-3")) {
                entry.target.style["transform"] = "rotate(180deg)"
            }
        } else {
            if (entry.target.classList.contains("meter-1")) {
                entry.target.style["transform"] = "rotate(0deg)"
            }
            if (entry.target.classList.contains("meter-2")) {
                entry.target.style["transform"] = "rotate(0deg)"
            }
            if (entry.target.classList.contains("meter-3")) {
                entry.target.style["transform"] = "rotate(0deg)"
            }
        }
    })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll(".meter")
boxElList.forEach((el) => {
    io.observe(el)
})
