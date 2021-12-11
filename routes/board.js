const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const boardCtrl = require('../controller/boardController')
// get boards
router.get('/', checkAuth, boardCtrl.getAll)
// get board
router.get('/:boardId', boardCtrl.get)
// save board
router.post('/', checkAuth, boardCtrl.save)
// update board
router.patch('/:boardId', checkAuth, boardCtrl.update)
// delete boards
router.delete('/', checkAuth, boardCtrl.deleteAll)
// delete board
router.delete('/:boardId', checkAuth, boardCtrl.delete)
module.exports = router