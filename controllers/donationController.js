const Donation = require('../models/donationModel');

// Add a new donation
const addDonation = async (req, res) => {
  try {
    const { name, amount } = req.body;
    const donation = new Donation({ name, amount });
    await donation.save();
    res.status(201).json({ message: 'Donation recorded successfully', donation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to record donation' });
  }
};

// Get all donations
const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
};

module.exports = { addDonation, getDonations };
