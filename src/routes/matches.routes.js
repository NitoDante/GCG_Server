const { Router } = require('express');
const router = Router();

const MatchCtrl = require('../controllers/Match.controller.js');

router.get('/',MatchCtrl.getMatches);
router.get('/:id',MatchCtrl.getMatch);

router.get('')

module.exports = router;