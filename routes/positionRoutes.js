const express = require('express')
const router = express.Router()
//funciones del controlador
const {index,create,update,destroy} = require('../controllers/positionController')
//funcion para validar campos
const {validate} = require('../middleware/validators/positionValidator')
//verificar el token de inicio de sesion
const validateToken = require('../middleware/validateToken')
//ruta version 1
const {PATH_V1} = require('./1-paths')

//position
router.get(`${PATH_V1}/positions/`,validateToken,index)
router.post(`${PATH_V1}/positions/`,[validateToken,validate],create)
router.put(`${PATH_V1}/positions/:id`,[validateToken,validate],update)
router.delete(`${PATH_V1}/positions/:id`,validateToken,destroy)

module.exports = router