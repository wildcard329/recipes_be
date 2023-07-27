const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { verifyToken } = require('../util/middleware/jwt.js');
// public routes
const auth = require('../route/public/authRoute.js');
const publicCategories = require('../route/public/categoryRouter.js');
const publicIngredients = require('../route/public/ingredientRoute.js');
const publicRecipes = require('../route/public/recipesRouter.js');
const users = require('../route/protected/userRouter.js');

// private routes
const privateCatagories = require('../route/protected/categoryRouter.js');
const privateIngredients = require('../route/protected/ingredientRouter.js');
const privateRecipes = require('../route/protected/userRecipesRouter.js');
const privateSubRecipes = require('../route/protected/userSubRecipeRouter.js');
const privateUnits = require('../route/protected/unitRouter.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', verifyToken, users);
server.use('/api/auth', auth);
server.use('/api/categories', publicCategories);
server.use('/api/ingredients', publicIngredients);
server.use('/api/recipes', publicRecipes);
server.use('/api/private/recipes', verifyToken, privateRecipes);
server.use('/api/private/subRecipes', verifyToken, privateSubRecipes);
server.use('/api/private/ingredients', verifyToken, privateIngredients);
server.use('/api/private/categories', verifyToken, privateCatagories);
server.use('/api/units', verifyToken, privateUnits);

module.exports = server;
