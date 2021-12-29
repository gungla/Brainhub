const router = require('express-promise-router')()

const { validateBody } = require('../middleware/validate')
const userValidate = require('../middleware/userValidate').schemas.user
const { 
    createHandler,
    getHandler,
    getAllHandler,
    updateHandler,
    deleteDocHandler
 } = require('../controller/userController')

router.route(`/`).post(validateBody(userValidate), createHandler)
router.route(`/:id`).get(getHandler)
router.route(`/`).get(getAllHandler)
router.route(`/:id`).put(updateHandler)
router.route(`/:id`).delete(deleteDocHandler)

module.exports = router
