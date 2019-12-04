const   express               = require("express"),
        app                   = express();

const   indexRoutes           = require("./routes/index");

app.set("view engine", "ejs");

app.use(indexRoutes); 

app.listen(3000, ()=>console.log("Testproject started."));

// module.exports = app;