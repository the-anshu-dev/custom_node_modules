const http = require("http");
// const query = require("./helper");
// const fs = require("fs");
const routes = require("./routes");
const Router = require("./router");


const PORT = process.env.PORT || 8000

const server = http.createServer((req,resp)=>{
    const router = new Router(req,resp)
    router.setUp(routes)
})

server.listen(PORT, function(){
    console.log(`Server is started at PORT = ${PORT}`);
})