const { Router } = require('express');
const router = Router();

const playerCtrl = require('../controllers/Player.controller.js');

router.get('/',playerCtrl.getPlayers);
router.get('/:id',playerCtrl.getPlayer);
/*router.post('/',playerCtrl.createPlayer);
router.put('/:id',playerCtrl.editPlayer);
router.delete('/:id',playerCtrl.deletePlayer);*/

router.get('')

module.exports = router;