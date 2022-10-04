const { Router } = require('express');
const router = Router();

const MatchCtrl = require('../controllers/Match.controller.js');

router.get('/',MatchCtrl.getMatches);
router.get('/season/:id',MatchCtrl.getMatch);
router.get('/seasons/',MatchCtrl.getSeasons);

router.get('')

module.exports = router;