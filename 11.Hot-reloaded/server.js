const http = require('http');
// const fs = require('fs');
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) =>{
 
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.write('Server started '+PORT)

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server started on port:= ${PORT}`);
});
