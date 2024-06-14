const deleteBtn = document.getElementById("deleteBtn")
const id = document.getElementById("idSkater").value

deleteBtn.addEventListener("click", async () => {
    try {
        const response = await axios.delete(`/skaters/${id}`)
        alert("Usuario eliminado con éxito")
        window.location = `/`
    } catch (error) {
        console.error(error)
        alert('Error al eliminar el registro')
    }
})

const dataForm = document.getElementById("dataForm")

dataForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nombre = document.getElementById("data_nombre").value
    const password = document.getElementById("data_password").value
    const password_repetida = document.getElementById("data_pass_repetida").value
    const anos_experiencia = document.getElementById("data_experiencia").value
    const especialidad = document.getElementById("data_especialidad").value

    if (password != password_repetida) {
        return alert('Las contraseñas no coinciden')
    }

    const skater = {
        id,
        nombre,
        password,
        anos_experiencia,
        especialidad
    }

    try {
        const response = await axios.put(`/skaters`, skater)
        alert("Datos actualizados con éxito")
        window.location = "/"
    } catch (error) {
        console.error(error)
        alert('Error en la actualizacion de datos')
    }

})