const http = require("http");

const todo = ["Rohan", "Orcale", "senior developer"];

const app = http.createServer((req, res) => {
    const { method, url } = req;
    if (url.toLowerCase() === "/todos") {
        // Get method
        if (method === "GET") {
            res.writeHead(200, { "Content-Type": "text/html" });

            res.write(todo.toString());

            // post method
        } else if (method === "POST") {
            let body = "";
            req.on("error", (err) => {
                console.log(err);
            });
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                body = JSON.parse(body);
                let deleteThis = body.item;
                for (let i = 0; i < todo.length; i++) {
                    if (todo[i] === deleteThis) {
                        todo.splice(i, 1);
                        break;
                    }
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(todo.toString());
                res.end();
            });
        }
    } else {
        res.writeHead(400);
    }
    res.end();
});

app.listen(8080, () => {
    console.log(`Server is listening http://localhost:8080`);
});
