const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const userLocations = {};

io.on("connection", (socket) => {
    
    socket.on("send-location", (data) => {

        io.emit("received-location", { id: socket.id, ...data });
    });
    socket.on("disconnect", () => {
        io.emit("user-disconnected", socket.id);
    });
});


app.get("/", (req, res) => {
    res.render("index");
});


server.listen(3000);