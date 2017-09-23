var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Article One | Harsha Attili',
        heading: 'Article One',
        date: 'sep 23,2017',
        content:`
         <p>
            This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricleThis is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle.
        </p> 
         <p>
          
            This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle.
        </p>    
         <p>
          
            This is the content for my first atricle. This is the content for my first atricle. This is the content for myfirst atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle. This is the content for my first atricle.
        </p>` 
    
},
 'article-two' : {
    title: 'Article Two| Harsha Attili',
        heading: 'Article Two',
        date: 'sep 24,2017',
        content: `  
        <p>
            This is the content for my second article.
        </p> `
        
 },
  'article-three' : {
    title: 'Article Three| Harsha Attili',
        heading: 'Article Three',
        date: 'sep 25,2017',
        content:`  
        <p>
            This is the content for my third article.
        </p>`
  }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
     <head>
         <title>
             ${title}
         </title>
         <meta  name="viewpoint" content="width=device-width, initial-scale=1" />
         <link  href="/ui/style.css" rel="stylesheet" />
     </head>
         <body>
             <div class="container">
                 <div>
                    <a href="/">Home</a>      
             </div>
             <hr/>
             <h3>
                 ${heading}
             </h3>
             <div>
                 ${date}
            </div>
            <div>
                 ${content}
            </div>
        </div>
        </body>
        </html>
      `;
      
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might have apache runing in 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
