registerForm = document.getElementById('registerForm')

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const nombre = document.getElementById('nombre').value
    const password = document.getElementById('password').value
    const password_repetida = document.getElementById('password_repetida').value
    const anos_experiencia = document.getElementById('experiencia').value
    const especialidad = document.getElementById('especialidad').value
    const foto = document.getElementById('foto').files[0]

    if (!email || !nombre || !password || !password_repetida || !anos_experiencia || !especialidad) {
        return alert("Todos los campos son requeridos")
    }

    if (password !== password_repetida) {
        return alert("Las contraseñas no coinciden")
    }

    const data = {
        email,
        nombre,
        password,
        password_repetida,
        anos_experiencia,
        especialidad,
        foto
    }

    try {
        const response = await axios.post('/skaters', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        alert('Registro exitoso')
        window.location = "/"
    } catch (error) {
        console.error(error)
        alert('Error en el registro')
    }
})