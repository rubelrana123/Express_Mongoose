const http =require('http');
const data =  [
    {
        "title" : "prisma",
        "body" : "learning node",
        "createdAt" : "15/02/2025 , 1:25:02 AM"
    },
        {
        "title" : "typescript",
        "body" : "learning node",
        "createdAt" : "5/02/2024 , 10:25:02 AM"
    }
]
const server = http.createServer((req, res) => {
    console.log(req.url,req.method)
    if (req.url === "/todos" && req.method === "GET") {
        // res.end("ALL TODOS");
        //customize header
        res.writeHead(201,{
            //  "content-type" : "application/json",
            //  "content-type" : "text/plain",
             "content-type" : "text/HTML",


             "email" : "123@gmail.com"
        })
        // res.end(JSON.stringify(data));
        res.end(`<div>Hello html</div> <h1>Hello html</h1>`);

        //another way customize header
        // res.setHeader("content-type" ,"text/plain");
        // res.setHeader("email" , "rubel@gmail.com");
        // res.statusCode = 202;

        




    } else if (req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("TODO Create");
    }  else {
        res.end('route not found')
    }
});

server.listen(5000, "127.0.0.1",()=> {
    console.log(`Server Running to port 5000`)
})

//todos > get > all  get
//todos/create-todo POST Create Todo