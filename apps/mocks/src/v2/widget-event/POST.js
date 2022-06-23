module.exports = (req, res) => {
  if (req.query && req.query.event && req.query.store_hash) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
