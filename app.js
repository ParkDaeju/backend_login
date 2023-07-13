'use strict';

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 리우팅
const home = require("./src/routes/home");
const restaurants = [
    {
      name: "맛있는 식당",
      phone: "02-1234-5678",
      address: "서울시 강남구",
      category: "한식",
      description: "맛있는 한식집입니다.",
      image_url: "https://example.com/image.jpg"
    },
    {
      name: "좋은 식당",
      phone: "02-9876-5432",
      address: "서울시 서초구",
      category: "양식",
      description: "좋은 양식집입니다.",
      image_url: "https://example.com/image.jpg"
    }
  ];
  
  app.get('/restaurants', (req, res) => {
    res.render('home/index', {restaurants: restaurants});
  });
// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.get("/registation", (req, res) => {
    res.render("home/registration");
});
// URL을 통해 전달되는 데이터에 한글 ,공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;