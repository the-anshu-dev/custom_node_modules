const View = require('../utility');
const SiteController = {
    IndexPage : function(req,resp){
        return View.renderHTML(resp,"pages/index.html");
    },
    SignUpPage:function(req,resp){
        return View.renderHTML(resp,"pages/register.html");
       },
       loginPage : function(req,resp){
        return  View.renderHTML(resp,"pages/login.html");
    }
}
module.exports = SiteController;