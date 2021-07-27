const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) =>
{
    fs.readdir("/", (err, data) =>
    {
        if (err) throw err;
        else {
            res.send(
                data
                    .map((e) =>
                    {
                        return e.includes(".")
                            ? e.includes("$") 
                                ?`<span style="
                                display: flex;
                                align-items:center;
                                margin: 10px;
                                padding: 20px;
                                font-size: 30px;">📑&nbsp<span>${e}</span>
                                </span>`
                                :`<span style="
                                display: flex;
                                align-items:center;
                                margin: 10px;
                                padding: 20px;
                                font-size: 30px;
                                margin-bottom:5px">📄&nbsp<span>${e}</span>
                                </span>`
                            : e.includes("$") 
                                ?`<span style="
                                display: flex;
                                align-items:center;
                                margin: 10px;
                                padding: 20px;
                                font-size: 30px;">💼&nbsp<span>${e}</span>
                                </span>`
                                :
                                `<span style="
                                display: flex;
                                align-items:center;
                                margin: 10px;
                                padding: 20px;
                                font-size: 30px;">📂&nbsp<span>${e}</span>
                                </span>`;
                    })
                    .join(" ")
            );
        }
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });