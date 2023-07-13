const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { verifyToken } = require('../util/middleware/jwt.js');

const users = require('../route/protected/userRouter.js');
const auth = require('../route/public/authRoute.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', verifyToken, users);
server.use('/api/auth', auth);

module.exports = server;
