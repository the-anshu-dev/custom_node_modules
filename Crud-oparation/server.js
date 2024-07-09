const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 8000;

const server = http.createServer(function(req, res) {
    const Router = {
      
        '/':'register.html',
        '/register':'register.html',
        '/login':'login.html'
    };

    let pageName = Router[req.url];

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
    });
    // pageName && req.url)
    if (pageName ) {
        try {
            let pageContent = fs.readFileSync(pageName, 'utf-8');
            res.write(pageContent);
        } catch (error) {
            res.write('<script>window.alert("404 Page Not Found")</script>');
        }
    } else {
        res.write('<script>window.alert("404 Page Not Found")</script>');
    }

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
