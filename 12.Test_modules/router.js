class Router {
    constructor(req, resp){
        this.req = req;
        this.resp = resp;
    }

    setUp(routes){
        Object.keys(routes).forEach((endPoint,index)=>{
            if(typeof(this.req.url)!='undefined'){
                if(endPoint === this.req.url){
                    let fn = routes[endPoint]
                    return fn(this.req, this.resp)
                }
            }
        })
    }
}

module.exports = Router