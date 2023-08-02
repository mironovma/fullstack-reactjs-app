/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// middleware для небольшой задержки. имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });

    next();
});

// Эндпоинт для логина: проверяем правильный ли логин и пароль
server.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: "User not found" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Проверяем авторизован ли пользовтаель по заголовкам
// просто есть ли заголовок authorization или нет
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "AUTH ERROR" });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log("Server is running on 8000 port: https://localhost:8000");
});
