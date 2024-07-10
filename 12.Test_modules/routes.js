const SideController = require("./controllers/SideController");

const Routes = {
  "/": SideController.IndexPage,
  "/register": SideController.SignUpPage,
  "/login": SideController.loginPage,
};
module.exports = Routes;
