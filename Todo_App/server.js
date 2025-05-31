const http = require("http");
const path = require("path");
const fs = require("fs");
const { json } = require("stream/consumers");
const filePath = path.join(__dirname, "./db/data.json");
//  console.log(__dirname, filePath)
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  // console.log(req.url,req.method)
  //get all todos
  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    // res.end("ALL TODOS");
    //customize header
    res.writeHead(201, {
      "content-type": "application/json",
      //  "content-type" : "text/plain",
      //  "content-type" : "text/HTML",
      email: "123@gmail.com",
    });
    // res.end(JSON.stringify(data));
    res.end(
      data
      // `<div>Hello html</div> <h1>Hello html</h1>`
    );

    //another way customize header
    // res.setHeader("content-type" ,"text/plain");
    // res.setHeader("email" , "rubel@gmail.com");
    // res.statusCode = 202;
  }
  //post sigle todo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const createdAt = new Date().toLocaleString();
      console.log({ body, title, createdAt });
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      parseAllTodos.push({ title, body, createdAt });
      console.log(parseAllTodos);
      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(JSON.stringify(parseAllTodos));
    });
  }
  //get 1 todo
  if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    //    console.log(title);
    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseAllTodos = JSON.parse(allTodos);
    const findData = parseAllTodos.find((todo) => {
      return todo.title === title;
    });
    res.writeHead(201, {
      "content-type": "application/json",
    });

    res.end(JSON.stringify(findData));
  }
  //update todo
  else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      const { body } = JSON.parse(data);
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
      parseAllTodos[todoIndex].body = body;
      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null,2), {encoding : "utf-8"})
         res.end(
        JSON.stringify(
            {title , body, createdAt : parseAllTodos[todoIndex].createdAt}
        )
    )
    });
 
  } else if (pathname === "/todos/delete-todo" && req.method === "DELETE") {
      const title = url.searchParams.get("title");
       const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
       //find todo and filter
  }

  else {
    res.end("route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`Server Running to port 5000`);
});

//todos > get > all  get
//todos/create-todo POST Create Todo
