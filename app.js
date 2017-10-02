const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'njk');

app.use('/static-files', express.static('static'));
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/template', (req, res, next) => {
    var items = [{ name: "foo", id: 1 }, { name: "bar", id: 2}];
    res.render('child', {
        title: 'NunJucks',
        items: items
    });
});

app.get('/import', (req, res, next) => {
    var items = [{ name: "foo", id: 1 }, { name: "bar", id: 2}];
    res.render('import', {
        title: 'NunJucks',
        items: items
    });
});

app.use((req, res, next) => {
    var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];
    var points = [[0, 1, 2], [5, 6, 7], [12, 13, 14]];
    
    res.render('index', {
        title: 'NunJucks',
        sampleList: [1, 2, 3, 4],
        items: items,
        points: points
    });
});

app.listen(3000);