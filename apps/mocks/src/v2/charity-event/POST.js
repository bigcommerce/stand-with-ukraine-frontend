/* eslint-disable camelcase */
const valid_charities = ['unicef', 'mira-action', 'razom', 'new-ukraine'];
const valid_events = ['see-more-clicked', 'support-clicked'];
const valid_store = ['test-store'];

module.exports = (req, res) => {
  if (
    req.query &&
    valid_charities.includes(req.query.charity) &&
    valid_events.includes(req.query.event) &&
    valid_store.includes(req.query.store_hash)
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
/* eslint-enable camelcase */
