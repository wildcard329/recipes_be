require('dotenv').config();
const server = require('./server/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n\n\t\tServer listening on port ${port}\n\n`));
