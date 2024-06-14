
const loginForm = document.getElementById("loginForm")
const loginEmail = document.getElementById("loginEmail")
const loginPassword = document.getElementById("loginPassword")

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = loginEmail.value
    const password = loginPassword.value

    if (!email || !password) {
        return alert("Todos los campos son requeridos")
    }

    try {
        const { data: token } = await axios.post("/login", { email, password })
        window.location = `/datos?token=${token}`
    } catch (error) {
        console.error(error)
        alert('Error al iniciar sesión. Por favor, intenta nuevamente.')
    }
})