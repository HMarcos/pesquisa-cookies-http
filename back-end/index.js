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

    let sessionValue = req.cookies.session_cookie;
    let permanentValue =   req.cookies.permanent_cookie;
    
    if (!sessionValue) {
        sessionValue = 1;
    }else{
        sessionValue = parseInt(sessionValue) + 1;
    }
    if (!permanentValue) {
        permanentValue = 1;
    }else {
        permanentValue = parseInt(permanentValue) + 1;
    }
    
    // Set the random cookie

    res.cookie("session_cookie", sessionValue);
    res.cookie("permanent_cookie", permanentValue,{maxAge: 3600000});

    const html = `
        <div style="width: fit-content; margin: 0 auto; box-shadow: 5px 5px 15px 5px #000000; background: #A3A45C; padding: 20px; border-radius: 6px;">
            <h1>Acessos da Sessão: ${sessionValue} </h1>
            <h1 style="color:white">Acessos Permanentes: ${permanentValue} </h1> 
        </div>
    `; 

    res.send(html);

})


app.listen(5000, () => {
    console.log(info("O servidor está rodando na porta 5000..."));
})
