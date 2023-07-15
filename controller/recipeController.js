const recipeService = require('../service/recipeService.js');
const codes = require('../util/config/serverCodes.json');

const success = codes.success.serverOk;
const created = codes.success.serverCreated;

const clientError = codes.clientErrors.serverBadRequest;
const clientUnauthorized = codes.clientErrors.serverUnauthorized;
const serverError = codes.serverErrors.serverInternalError;

const addRecipe = async (recipe) => {
  let status, resData;
  try {
    const recipeId = await recipeService.addRecipe(recipe);
    status = success.code;
    resData = { msg: success.msg, data: recipeId };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

const deleteRecipe = async (id) => {
  const recipeId = parseInt(id);
  let status, resData;
  try {
    await recipeService.deleteRecipe(recipeId);
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

const getRecipes = async () => {
  let status, resData;
  try {
    const recipes = await recipeService.getRecipes();
    status = success.code;
    resData = { msg: success.msg, data: recipes };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

const getRecipeById = async (id) => {
  const recipeId = parseInt(id);
  let status, resData;
  try {
    const recipe = await recipeService.getRecipeById(recipeId);
    status = success.code;
    resData = { msg: success.code, data: recipe };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

const updateRecipe = async (recipe) => {
  let status, resData;
  try {
    await recipeService.updateRecipe(recipe);
    status = success.code;
    resData = { msg: success.msg, };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};
