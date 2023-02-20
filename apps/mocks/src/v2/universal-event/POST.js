/* eslint-disable camelcase */
const valid_events = ['generate-code', 'copy-code'];

module.exports = (req, res) => {
  if (
    req.query &&
    valid_events.includes(req.query.event_type)
  ) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
};
/* eslint-enable camelcase */
