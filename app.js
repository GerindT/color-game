var     express             = require("express"),
        app                 = express ();

//dirname per stylesheets     
app.use(express.static(__dirname +'/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/colorgame.html');
    })

app.listen(process.env.PORT ,function(){
        console.log("Started");
        });
        // process.env.PORT || 3000 per local host