const http = require('http');
const fs = require('fs');
const path = require('path');



const PORT = 4000
const HOST_NAME = 'localhost';

function requesthandler(req, res) {

if (req.url === '/books' && req.method === 'GET') {
    console.log("GET REQUEST TO BOOK ROUTE")
}else if  (req.url === '/books' && req.method === 'POST') {
    console.log("POST REQUEST TO BOOK ROUTE")
}else if  (req.url === '/books' && req.method === 'PUT') {
    console.log("PUT REQUEST TO BOOK ROUTE")
}else if (req.url === '/books' && req.method === 'DELETE') {
    console.log("DELETE REQUEST TO BOOK ROUTE") 
}else if  (req.url === '/books/authors' && req.method === 'GET') {
    console.log("GET REQUEST TO AUTHOR ROUTE")
}else if  (req.url === '/books/authors' && req.method === 'POST') {
    console.log("POST REQUEST TO AUTHOR ROUTE") 
}else if (req.url === '/books/authors' && req.method === 'PUT') {
    console.log("PUT REQUEST TO AUTHOR ROUTE")
}
}






const server = http.createServer(requesthandler)

server.listen(PORT, HOST_NAME, () => {
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})