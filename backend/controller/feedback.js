const Feedback = require("../models/Feedback");

async function getStatus(req, res) {
  const user = req.user;

  return res.json({ ok: true });
}

async function storeFeedback(req, res) {
  const user = req.user;
  const { date, environment, canteen, classroom, washroom, overall } = req.body;

  const feedback = new Feedback({
    userId: user._id,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    date,
    environment,
    canteen,
    classroom,
    washroom,
    overall,
  });

  await feedback.save();

  return res.json({ ok: true });
}

module.exports = { getStatus, storeFeedback };
