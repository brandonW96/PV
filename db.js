// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/bw1126';
}
const mongoose = require('mongoose')
const URLSlugs = require('mongoose-url-slugs');
<<<<<<< HEAD
mongoose.connect('mongodb://localhost/projectviolet');

const User = new mongoose.Schema({
	username: String,
	password: String, 
	history: String, //just a list of urls
	pmeter: Number,
});
=======
mongoose.connect('mongodb://localhost');

>>>>>>> ed164296aa20f418b2e589bf07a4d281f74600b0

const Article = new mongoose.Schema({
	title: String,
	author: String,
	source: String,
	content: String,
	pvalue: Number,
});

const User = new mongoose.Schema({
	username: String,
	hash: String,
	history: [Article],
	pmeter: Number,
});

Article.plugin(URLSlugs('title'));

mongoose.model('User', User);
mongoose.model('Article', Article);