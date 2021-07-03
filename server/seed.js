/* mySeedScript.js */
// require the necessary libraries
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost/masterticket2';

// Database Name
const dbName = 'masterticket2';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  // get access to the relevant collections
  const usersCollection = db.collection('users');
  const postsCollection = db.collection('posts');
  // make a bunch of users
  let users = [];
  for (let i = 0; i < 10; i += 1) {
    let newUser = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: "password123"
    };
    users.push(newUser);

    console.log(newUser.username, newUser.email);
  }
  usersCollection.insertMany(users);

  // make a bunch of posts
  let posts = [];
  for (let i = 0; i < 10; i += 1) {
    let newPost = {
      eventTitle: 'Weezer',
      username: faker.internet.userName(),
      venue: faker.company.companyName(),
      city: faker.address.city(),
      band: 'Weezer',
      genre: faker.music.genre(),
      eventDescription: faker.lorem.sentences(5),
      date: faker.date.future(),
      featuredEvent: faker.datatype.boolean()
    };
    posts.push(newPost);

    console.log(newPost.eventTitle);
  }
  postsCollection.insertMany(posts);
  console.log("Database seeded! :)");
  client.close();
});
