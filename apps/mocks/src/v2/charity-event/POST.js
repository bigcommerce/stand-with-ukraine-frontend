const valid_charities = ['unicef', 'mira-action', 'razom', 'new-ukraine'];
const valid_store = ['test-store'];

module.exports = (req, res) => {
  if (
    req.query &&
    valid_charities.includes(req.query.charity) &&
    valid_store.includes(req.query.store_hash)
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
