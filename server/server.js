const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { verifyToken } = require('../util/middleware/jwt.js');

const users = require('../route/protected/userRouter.js');
const auth = require('../route/public/authRoute.js');
const publicRecipes = require('../route/public/recipesRouter.js');
const publicIngredients = require('../route/public/ingredientRoute.js');
const privateRecipes = require('../route/protected/userRecipesRouter.js');
const privateSubRecipes = require('../route/protected/userSubRecipeRouter.js');
const privateCatagories = require('../route/protected/categoryRouter.js');
const privateIngredients = require('../route/protected/ingredientRouter.js');
const privateUnits = require('../route/protected/unitRouter.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', verifyToken, users);
server.use('/api/auth', auth);
server.use('/api/recipes', publicRecipes);
server.use('/api/ingredients', publicIngredients);
server.use('/api/private/recipes', verifyToken, privateRecipes);
server.use('/api/private/subRecipes', verifyToken, privateSubRecipes);
server.use('/api/private/ingredients', verifyToken, privateIngredients);
server.use('/api/categories', verifyToken, privateCatagories);
server.use('/api/units', verifyToken, privateUnits);

module.exports = server;
