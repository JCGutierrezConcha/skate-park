const chequeo = document.querySelectorAll(".check");

chequeo.forEach((item) => {
    item.addEventListener("click", async (e) => {
        const estado = e.target.checked
        const id = e.target.id

        const data = {
            id,
            estado
        }
        try {
            await axios.put("/admin", data)
            alert("Estado cambiado exitosamente")
        } catch (error) {
            console.error(error)
            alert('Error al cambiar el estado')
        }
    })
})