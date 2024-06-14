import { Router } from 'express'
import { controllerSkater } from '../controllers/skater.controller.js'
import { controllerView } from '../controllers/view.controller.js'

const router = Router()

router.get('/login', controllerView.loginView)
router.get('/registro', controllerView.registroView)


router.get('/', controllerSkater.getAllSkaters)
router.post('/skaters', controllerSkater.createSkater)
router.put('/skaters', controllerSkater.updateSkater)
router.delete('/skaters/:id', controllerSkater.removeSkater)
router.post('/login', controllerSkater.loginSkater)
router.get('/datos', controllerSkater.dataSkater)

router.get('/admin', controllerSkater.adminSkaters)
router.put('/admin', controllerSkater.statusSkater)





export default router