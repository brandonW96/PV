const mongoose = require('mongoose');
require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Request = require('request');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
nytimesSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
<<<<<<< HEAD
let searchTerm = '';
const Article = mongoose.model('Article');
let today = new Date();
app.get('/', (req, res) =>	{
	searchTerm = req.query.search;
	res.render('home'); //welcome page that will have the searchbar
						//store the query as the search term and then route to the /results page
   	if(typeof searchTerm !== undefined || typeof searchTerm !== null){
     	res.redirect('/results');
  }
  console.log(searchTerm);
});


app.get('/results', (req, res) => {
  // first search in mongodb for the article
  // if it's not there then do this stuff
  // otherwise send back the article and then save that article
  top10nyt = []; //array storing the articles
  top10econ = [];
  top10wp = [];
	Request.get({
  		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  	  qs: {
    	'api-key': "da7eede9151547a08130b5401625e858",
    	'q': searchTerm,
    	'sort': "newest"
  	},
  }, function(err, response, body) {
  		body = JSON.parse(body);
  		articleJSON = body.response.docs;
  		for(let i = 0; i < 10; i++)
        {
  			  let nytArticle = new Article({
          title: articleJSON[i].headline.main,
          author: articleJSON[i].byline.original,
          source: 'NYTimes',
          pvalue: 5,
          content: articleJSON[i].web_url,
          });
          nytArticle.save();
          top10nyt.push(nytArticle);
  		}
	});
	//call res.render with a page that has 3 columns which display the results you get from the searchs
	Request.get({
		url: 'https://newsapi.org/v2/top-headlines?sources=the-economist' +
          'q='+searchTerm+'&' +
          'from='+today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate()+'&'+
          'sortBy=popularity&' +
          'apiKey=4139a9a86e7a401da9a6773fbab7a036'
	}, function(err, response){
      body = JSON.parse(response);
      console.log(body);
      article = body.articles;
      for(let i = 0; i < 10; i++)
      {
        let econArticle = new Article({
          title: article[i].title,
          author: '',
          source: 'The Economist',
          pvalue: 0,
          content: article[i].url,
        });
          econArticle.save();
          top10econ.push(econArticle);
      }
  });

  Request.get({
    url: 'https://newsapi.org/v2/top-headlines?sources=the-washington-post' +
          'q='+searchTerm+'&' +
          'from='+today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate()+'&'+
          'sortBy=popularity&' +
          'apiKey=4139a9a86e7a401da9a6773fbab7a036'
  }, function(err, response, body){
      body = JSON.parse(response);
      article = body.article;
      for(let i = 0; i < 10; i++)
      {
        let wpArticle = new Article({
          title: article[i].title,
          author: '',
          source: 'Washington Post',
          pvalue: -5,
          content: article[i].url,
        });
          wpArticle.save();
          top10wp.push(wpArticle);
      }
  });
  res.render('results', {'top10nyt': top10nyt ,'top10econ': top10econ, 'top10wp': top10wp});
});

=======
searchTerm = '';

app.get('/', (req, res) =>{
	searchTerm = req.query;
	res.render('home'); //welcome page that will have the searchbar
						//store the query as the search term and then route to the /results page
});


app.get('/results', (req, res) => {
	Request.get({
  		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  	qs: {
    	'api-key': "da7eede9151547a08130b5401625e858",
    	'q': "trump",
    	'sort': "newest"
  	},
}, function(err, response, body) {
  		body = JSON.parse(body);
  		article = body.response.docs;
  		top10nyt = [];
  		for(let i = 0; i < 10; i++){
  			top10nyt += article[i].headline.main;
  		}
	});
	//call res.render with a page that has 3 columns which display the results you get from the searchs
	req.get({
		url: 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2017-12-03&' +
          'sortBy=popularity&' +
          'apiKey=4139a9a86e7a401da9a6773fbab7a036'
	});
});

>>>>>>> ed164296aa20f418b2e589bf07a4d281f74600b0
// app.get('/register', (req, res) =>{
// 	//get the password and user
// })

// let url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2017-12-03&' +
//           'sortBy=popularity&' +
//           'apiKey=4139a9a86e7a401da9a6773fbab7a036';

// let req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
<<<<<<< HEAD
app.listen(8000);
=======
app.listen(3000);
>>>>>>> ed164296aa20f418b2e589bf07a4d281f74600b0
