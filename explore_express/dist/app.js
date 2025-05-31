"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { todosRouter } from './app/todos/todos.routes';
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
const port = 3000;
app.get('/', (req, res, next) => {
    res.send("HEllo world");
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
// app.use("/todos", todosRouter)
// app.use("/users", userRouter)
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     console.log({
//         url: req.url,
//         method: req.method,
//         header: req.header
//     });
//     next()
// },
//     async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             res.send('Welcome to Todos App')
//         } catch (error) {
//             next(error)
//         }
//     })
// app.get('/error',
//     async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             res.send('Welcome to error er duniya')
//         } catch (error) {
//             next(error)
//         }
//     })
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.status(404).json({ message: "Route not found" })
// })
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//     if (error) {
//         console.log("error", error);
//         res.status(400).json({ message: "Something went wrong from global error handler", error })
//     }
// })
// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]
// export default app;
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */ 
