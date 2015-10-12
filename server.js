var express    =    require('express');
var app        =    express();

app.set('port', (process.env.PORT || 3000));

require('./router/main')(app);

//views for template files
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(app.get('port'), function() {
    console.log("Waffle app is running");
});

