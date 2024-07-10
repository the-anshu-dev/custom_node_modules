const View ={
    render : function(pagename){
        const content = fs.readFileSync(`${__dirname}/${pagename}`);
        return Buffer.from(content).toString();
    },
    renderHTML :function(resp, pagename){
        resp.writeHead(200,{
            "Content-Type":"text/html",
        });
        const content = fs.readFileSync(`${__dirname}/${pagename}`);
        resp.end(Buffer.from(content).toString());
    }
}
module.exports  = View;