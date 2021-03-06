const express = require('express')
const router = express.Router()
//funciones del controlador
const {index,create,update,destroy} = require('../controllers/commissionController')
//funcion para validar campos
const {validate} = require('../middleware/validators/commissionValidator')
//verificar el token de inicio de sesion
const validateToken = require('../middleware/validateToken')
//ruta version 1
const {PATH_V1} = require('./1-paths')

//anomalies
router.get(`${PATH_V1}/commissions/`,validateToken,index)
router.post(`${PATH_V1}/commissions/`,[validateToken,validate],create)
// router.put(`${PATH_V1}/commissions/:id`,[validateToken,validate],update)
// router.delete(`${PATH_V1}/commissions/:id`,validateToken,destroy)

module.exports = router