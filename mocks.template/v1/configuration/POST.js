const fs = require('fs');

module.exports = (req, res) => {
  const configuration = req.body;
  fs.writeFileSync(
    `${__dirname}/GET.json`,
    JSON.stringify(configuration, null, 2)
  );
  res.status(200).json(configuration);
};
