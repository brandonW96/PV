# PROJECT VIOLET 

## Overview


PROJECT VIOLET will be a news application that is aimed at helping people break out of their political bubbles. You'll search for articles by keyword and you'll get a display of news articles ranging from liberal, centrist to conservative.

Users can register and login. Once they do, they will be assigned a meter that tells them, based on the articles read, where they land on the political spectrum. If they start to lean too much to one side, PROJECT VIOLET will send reminders to read news from the other side.

## Data Model

The application will store Users, Articles, and PMeters (political meters)

* users can have multiple articles read
* users can have only 1 PMeter
* articles will be assigned (for now, an arbitrary value) a PMeter value that shifts a user's PMeter.

(___TODO__: sample documents_)

An Example User:

```javascript
{
  username: "johnsmith",
  hash: // a password hash,
  history: // an array of references to Articles
  pmeter: // an integer between 1 and 100
}
```

An Example Article:

```javascript
{
  title: // title of article
  author: // author name,
  source: // which publication
  content: // actual content
  pvalue: // PMeter value
}
```


## [Link to Commented First Draft Schema](db.js) 

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

* (3 points) NYT, Economist, and Washington Post API
* (5 points) selenium
    * using selenium to scrape news articles

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)
