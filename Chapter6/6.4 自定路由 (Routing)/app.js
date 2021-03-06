var express = require('express');
var app = express();

app.configure(function() {
    // 啟用路由機制
    app.use(app.router);
});

// GET方法的路由，用來處理「/myroute」路徑
app.get('/myroute', function(req, res) {
    // 傳送字串回瀏覽器
    res.send('This is GET method');
    res.end();
});

// POST方法的路由，用來處理「/」路徑
app.post('/myroute', function(req, res) {
    // 傳送字串回瀏覽器
    res.send('This is POST method');
    res.end();
});

app.listen(12345);

