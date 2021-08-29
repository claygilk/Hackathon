# Readme for Mintbean Hackathon project: Scrobble

## Back End API Documentation

The source code for the back end of this project is located in the `/node` directory. The back end consists of an Express server REST API that can perform read and write operations on a MongoDB database. The database is only used to keep track of high scores.

### API Endpoints

* `GET '/'` This endpoint returns returns the top 10 high scores across all players
* `GET '/<player-initals>'` This endpoint returns returns the top 10 high scores for the given player.
* `POST '/'` This endpoint is used to add a new score to the database. It accepts a JSON object in the body with the follow format:

```javascript
{
    "username" : String,
    "point_total" : Number
}

```

## Front End Documentation
lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum

## Meet the Team

### Clay Gilkerson
Clay is an aspiring developer with a passion for learning new technologies and solving interesting problems. He is experienced with C#/.NET and Vue.js, and Currently exploring Node.js and MongoDB.
* [LinkedIn](https://www.linkedin.com/in/clay-gilkerson/)
* [GitHub](https://github.com/claygilk)

### Jamie Mullins
Jamie is a motivated software developer with 5+ years of management experience in various work environments. She is always eager to learn and create new things.
* [LinkedIn]("https://www.linkedin.com/in/jamie-mullins")
* [GitHub]("https://github.com/jamiemullins1")