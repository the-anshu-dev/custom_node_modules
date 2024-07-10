const View = require('../utility')

const SideController = {
    IndexPage : function(req,resp){
        const content = View.render('pages/index.html');
        resp.writeHead(200,{'content-type':'text/html'})

        resp.write(content)
        resp.end()
    },

    SignUpPage : function(req,resp){
        const content = View.render('pages/register.html');
        resp.writeHead(200,{'content-type':'text/html'})

        resp.write(content)
        resp.end()
    },

    loginPage : function(req,resp){
        const content = View.render('pages/login.html');
        resp.writeHead(200,{'content-type':'text/html'})

        resp.write(content)
        resp.end()
    },



}


module.exports = SideController