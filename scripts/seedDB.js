const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/destination_db");
const questions = [
  {
    question: "Favorite season?",
    answers: [
      {
        answer1: "Winter",
        img: "https://c.pxhere.com/photos/c1/f2/photo-1299553.jpg!d"
      }, {
        answer2: "Summer",
        img: "https://www.kymenmatkat.fi/wp-content/uploads/2018/01/USA-Yellowstone-old-geyser-1920.jpg"
      }, {
        answer3: "Autumn",
        img: "https://www.goodfreephotos.com/albums/united-states/vermont/other-vermont/water-and-autumn-landscape-in-vermont.jpg"
      }, {
        answer4: "Spring",
        img: "https://cdn.pixabay.com/photo/2015/10/12/15/01/flower-984089_960_720.jpg"
      }
    ]
  },
  {
    question: "Favorite type of food?",
    answers: [
      {
        answer1: "Seafood",
        img: "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1100&format=jpeg&auto=webp"
      }, {
        answer2: "Meat-Lover",
        img: "https://www.pizzahut-tt.com/wp-content/uploads/2017/05/MEAT-LOVER%E2%80%99S.png"
      },
      {
        answer3: "Vegan",
        img: "https://external-preview.redd.it/I3-sYG3D56jJeDN9fE034n9Sj2DZX_XgjylYYKQuryQ.jpg?s=acbb847e8ca126e308397e1d501c48c0acbcb891"
      }, {
        answer4: "Vegetarian",
        img: "http://images.media-allrecipes.com/userphotos/960x960/3999906.jpg"
      }
    ]
  },
  {
    question: "Favorite Activity?",
    answers: [
      {
        answer1: "Rodeo",
        img: "https://c0.wallpaperflare.com/preview/115/494/489/animal-cowgirl-equestrian-riding.jpg"
      }, {
        answer2: "Jet Skiing",
        img: "https://s3-media1.fl.yelpcdn.com/bphoto/Anm3eUsnkzV_sjcSk2zXtg/o.jpg"
      }, {
        answer3: "Museum",
        img: "https://secureservercdn.net/50.62.174.132/wvz.ea1.myftpupload.com/wp-content/uploads/2011/11/Denver-Museum-of-Nature-and-Science.jpg"
      }, {
        answer4: "Mountain climbing",
        img: "https://www.1zoom.me/big2/176/251113-frederika.jpg"
      }
    ]
  },
  {
    question: "Favorite way to travel?",
    answers: [
      {
        answer1: "Plane",
        img: "https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=450"
      }, {
        answer2: "Car",
        img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/Evo/restyle/3_RP---Huracan-Evo-88.jpg"
      }, {
        answer3: "Walking",
        img: "https://st2.depositphotos.com/1744479/9503/i/950/depositphotos_95034014-stock-photo-big-crowd-times-square.jpg"
      }, {
        answer4: "Bus",
        img: "https://live.staticflickr.com/5521/30840987015_7f4a2f7754_b.jpg"
      }
    ]
  },
  {
    question: "Favorite Genre?",
    answers: [
      {
        answer1: "Horror",
        img: "https://incoherent2016.files.wordpress.com/2018/01/it02.jpg"
      }, {
        answer2: "Comedy",
        img: "https://yt3.ggpht.com/-0Kj_pJZYLY8/AAAAAAAAAAI/AAAAAAAAAAA/1fjckCAmTII/s900-c-k-no/photo.jpg"
      },
      {
        answer3: "Drama",
        img: "https://memegenerator.net/img/images/300x300/13999595.jpg"
      }, {
        answer4: "Action",
        img: "http://cdn-s3.si.com/s3fs-public/images/Rocky-Balboa-Sylvester-Stallone-Mr-T-Clubber-Lang-NLC_03460.jpg"
      }
    ]
  }
]
db.quizQuestions
  .remove({})
  .then(() => db.quizQuestions.collection.insertMany(questions))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });