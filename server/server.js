const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const users = require('../route/protected/userRouter.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', users);

module.exports = server;
