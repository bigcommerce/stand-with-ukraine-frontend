const valid_events = ['opened', 'collapsed', 'closed'];
const valid_store = ['test-store'];

module.exports = (req, res) => {
  if (
    req.query &&
    valid_events.includes(req.query.event) &&
    valid_store.includes(req.query.store_hash)
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
