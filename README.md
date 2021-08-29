# Readme for Mintbean Hackathon project: Scrobble

## Back-end API Documentation

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