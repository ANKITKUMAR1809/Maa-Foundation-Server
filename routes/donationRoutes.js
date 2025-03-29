const express = require('express');
const { addDonation, getDonations } = require('../controllers/donationController');

const router = express.Router();

router.post('/donate', addDonation);
router.get('/donations', getDonations);

module.exports = router;
