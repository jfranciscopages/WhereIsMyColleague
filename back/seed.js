const { User_Profile } = require("./models/index");

const Users = [
  {
    firstName: "Ramiro",
    lastName: "Arias",
    email: "ramiroarias@globant.com",
    password: 1234,
    country: "Argentina",
    city: "Buenos Aires",
    latitude: "-34.54100703942528",
    longitude: "-58.47279831729628",
  },
  {
    firstName: "Caterina ",
    lastName: "Jones",
    email: "caterinajones@globant.com",
    password: 1234,
    country: "United Kingdom",
    city: "London",
    latitude: "51.520321956776826",
    longitude: "-0.10822237518363834",
  },
  {
    firstName: "Dock",
    lastName: "Koch",
    email: "dockkoch@globant.com",
    password: 1234,
    country: "Romania",
    city: "Cluj-Napoca",
    latitude: "48.13159598006025",
    longitude: "23.5873611",
  },
  {
    firstName: "Gabriel",
    lastName: "Rama",
    email: "gabrielrama@globant.com",
    password: 1234,
    country: "Argentina",
    city: "Mar del Plata",
    latitude: "-38.01078500106845",
    longitude: "-57.535618144180674",
  },
  {
    firstName: "Tessie ",
    lastName: "Hills ",
    email: "tessiehills@globant.com",
    password: 1234,
    country: "Romania",
    city: "Cluj-Napoca",
    latitude: "48.13159598006025",
    longitude: "23.5873611",
  },
];
console.log("👥 User seeds...");
User_Profile.bulkCreate(Users).then(() =>
  console.log("    ✓ Users stage 1 seeded successfully!")
);
