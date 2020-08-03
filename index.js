const fs = require("fs");
const express = require("express");
var path = require('path');
const app = express();

//const src = "E:\\Virtual Box"
const src = "D:"


app.get("/", (req, res) => {
    const testFolder = src;
    let str = "<h2>Current Directory : "+src+"</h4><div style=''>"
    let str1 = "<h3 style='color:Red;font-weight:bold;font-size: larger;text-decoration: underline;'>Folders In This Directory</h3><div style='display:flex; align-items:flex-start; justify-content:flex-start; flex-direction: row; flex-wrap: wrap; flex-flow: row wrap; align-content: flex-end;'>";
    let str2 = "<h3 style='color:Red;font-weight:bold;font-size: larger;text-decoration: underline;'>Files In This Directory</h3><div style=''>"
    let folders = fs.readdirSync(testFolder,{withFileTypes: true})
    folders.forEach((file) => {
        if (file.isDirectory()) str1 += "<p style='background-color:#eeeeee;border: 1px solid #A9A9A9;font-size: large;padding:5px;margin:5px;'> &#128193; " + file.name + "</p>";
        else str2 += "<div style='font-size: large;padding:5px;margin:5px;'> &#x27A2; " + file.name + "</div>";
    });
    str1 += "</div>";
    str2 += "</div>";
    res.send(str+str1+str2);
});

app.listen(4000,()=>{
    console.log("listening")
})