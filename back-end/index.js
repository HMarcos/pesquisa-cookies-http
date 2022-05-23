import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import chalk from "chalk";

const info = chalk.green.bold;
const debug = chalk.yellow;

const app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    // Show the cookies
    console.log(debug("Cookies: "), req.cookies);

    // Set the random cookie
    res.cookie("session-cookie", 5000);
    res.cookie("permanent-cookie", 1000,{maxAge: 360000});

    res.send("Setting random cookie");

})


app.listen(5000, () => {
    console.log(info("O servidor está rodando na porta 5000..."));
})
