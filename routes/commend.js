const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const commendCtrl = require('../controller/commendController')
// get commend
router.get('/:commendId', checkAuth, commendCtrl.get)
// save commend
router.post('/', checkAuth, commendCtrl.save)
// update commend
router.patch('/:commendId', checkAuth, commendCtrl.update)
// delete commend
router.delete('/:commendId', checkAuth, commendCtrl.delete)
module.exports = router