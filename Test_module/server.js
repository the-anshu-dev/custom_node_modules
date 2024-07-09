const http = require('http');
const fs = require('fs');
const path = require('path');
const DATA = require('./test_helper'); 
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    const Router = {
        '/': 'login.html',
        '/login': 'login.html',
        '/register': 'register.html',
        '/home': 'home.html'
    };

    if (req.method === 'GET' && Router[req.url]) {
        const pageName = Router[req.url];
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        try {
            const pageContent = fs.readFileSync(pageName, 'utf-8');
            res.write(pageContent);
        } catch (error) {
            res.write('<script>window.alert("404 Page Not Found")</script>');
        }
        res.end();
    } else if (req.method === 'POST' && req.url === '/register') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { name, email, password } = JSON.parse(body);
                DATA.register({ name, email, password });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User registered successfully' }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid request data' }));
            }
        });
    } else if (req.method === 'POST' && req.url === '/login') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { email, password } = JSON.parse(body);
                const user = DATA.select('email', email);

                if (user && user.password === password) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Login successful' }));
                } else {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Invalid email or password' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid request data' }));
            }
        });
    } else if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = DATA.read();
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<script>window.alert("404 Page Not Found")</script>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
