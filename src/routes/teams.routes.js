const { Router } = require('express');
const router = Router();

const TeamCtrl = require('../controllers/Team.controller.js');

router.get('/',TeamCtrl.getTeams);
router.get('/:id',TeamCtrl.getTeam);

router.get('')

module.exports = router;