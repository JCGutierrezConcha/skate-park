const loginView = (req, res) => {
    res.render('login')
}

const registroView = (req, res) => {
    res.render('registro')
}

const adminView = (req, res) => {
    res.render('admin')
}

export const controllerView = {
    loginView,
    registroView,
    adminView
}