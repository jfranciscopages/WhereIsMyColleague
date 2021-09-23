var faker = require("faker");
const axios = require("axios");
const { User_Profile } = require("./models/index");

const name = faker.name.findName();
let altosUsers = [];

for (let i = 0; i <= 20; i++) {
  altosUsers.push({
    email: faker.internet.email(name),
    password: 1234,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
    city: faker.address.city(),
    phone: faker.phone.phoneNumber(),
  });
}

console.log("👥 User seeds...");
User_Profile.bulkCreate(altosUsers).then((data) =>
  console.log("    ✓ Users stage 1 seeded successfully!")
); //Save array of users in database by creating the users
