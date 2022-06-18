async function getStatus(req, res) {
  const user = req.user;

  return res.json({ ok: true });
}

module.exports = { getStatus };
