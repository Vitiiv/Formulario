
const form = document.querySelector("#form")
const inputs = document.querySelectorAll('.info')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    inputs.forEach(input => {
        const campo = input.querySelector('input')
        const smallText = input.querySelector('small')
        const value = campo.value
        if (value === "") {
            input.classList.add('error');
            input.classList.remove('success');
            smallText.style.visibility = 'visible'
        } else {
            input.classList.add('success');
            input.classList.remove('error');
            smallText.style.visibility = 'hidden'
        }
    })
})