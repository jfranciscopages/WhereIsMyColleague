const { User_Profile, Branches, Floors, Workspaces } = require("./models");

const Branchs = [
  {
    country: "Argentina",
    city: "Buenos Aires",
    address: "Correa 2442",
    CP: "C1429DRN",
    phone: "+54 11 4109-1700",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2019-03/1%20%282%29.jpg?itok=Z8MucHhy",
    latitude: "-34.54100703942528",
    longitude: "-58.47279831729628",
  },
  {
    country: "Argentina",
    city: "Mar del Plata",
    address: "Avenida Colón 1114",
    CP: "B7600FXR",
    phone: "+54 11 4109-1700",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2018-09/Mar%20del%20Plata.jpg?itok=5k7_CvH5",
    latitude: "-38.01078500106845",
    longitude: "-57.535618144180674",
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "5th Floor 36-38 Hatton Garden",
    CP: "EC1N 8EB",
    phone: "+44 20 7979-1885",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2018-09/london1.jpg?itok=sVZb3IFJ",
    latitude: "51.520321956776826",
    longitude: "-0.10822237518363834",
  },
  {
    country: "Romania",
    city: "Cluj-Napoca",
    address: "Strada Republicii 24",
    CP: "400000",
    phone: "+40-264-418-686",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2019-03/istockphoto-658396342-612x612.jpg?itok=OYNhIC4X",
    latitude: "48.13159598006025",
    longitude: "23.5873611",
  },
  {
    country: "Spain",
    city: "Madrid",
    floor: "13 B",
    CP: "400000",
    address: "Strada Republicii 24",
    phone: "+34 917 874 700",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2018-09/Madrid.jpg?itok=ahObQH3m",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
];

const Floor = [
  {
    branchId: "1",
    name: "Floor PB - UI / UX Departament",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    branchId: "2",
    name: "Floor PB - UI / UX Departament",
    image:
      "https://i.pinimg.com/originals/bd/39/48/bd39485901b2430f72a7f5b85edadbca.jpg",
  },
  {
    branchId: "3",
    name: "Floor PB - UI / UX Departament",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    branchId: "4",
    name: "Floor PB - UI / UX Departament",
    image:
      "https://i.pinimg.com/originals/bd/39/48/bd39485901b2430f72a7f5b85edadbca.jpg",
  },
  {
    branchId: "5",
    name: "Floor PB - UI / UX Departament",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    branchId: "1",
    name: "Floor 1 - Front-End Departament",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
];

const Workspace = [
  {
    floorId: "1",
    name: "Office 1",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    floorId: "1",
    name: "Office 2",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    floorId: "2",
    name: "Office 1",
    image:
      "https://i.pinimg.com/originals/bd/39/48/bd39485901b2430f72a7f5b85edadbca.jpg",
  },
  {
    floorId: "3",
    name: "Office 1",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    floorId: "4",
    name: "Office 1",
    image:
      "https://i.pinimg.com/originals/bd/39/48/bd39485901b2430f72a7f5b85edadbca.jpg",
  },
  {
    floorId: "5",
    name: "Office 1",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
  {
    floorId: "6",
    name: "Office 1",
    image: "https://beyonddesign.in/t43/wp-content/uploads/2019/02/PAB4350.jpg",
  },
];

const Users = [
  {
    branchId: "1",
    workspaceId: "1",
    firstName: "Ramiro",
    lastName: "Arias",
    email: "ramiroarias@globant.com",
    password: "1234",
    country: "Argentina",
    city: "Buenos Aires",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    branchId: "2",
    workspaceId: "2",
    firstName: "Caterina",
    lastName: "Jones",
    email: "caterinajones@globant.com",
    password: "1234",
    country: "United Kingdom",
    city: "London",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    branchId: "3",
    workspaceId: "3",
    firstName: "Dock",
    lastName: "Koch",
    email: "dockkoch@globant.com",
    password: "1234",
    country: "Romania",
    city: "Cluj-Napoca",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    branchId: "4",
    workspaceId: "4",
    firstName: "Gabriel",
    lastName: "Rama",
    email: "gabrielrama@globant.com",
    password: "1234",
    country: "Argentina",
    city: "Mar del Plata",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    branchId: "5",
    workspaceId: "5",
    firstName: "Tessie ",
    lastName: "Hills ",
    email: "tessiehills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    branchId: "1",
    workspaceId: "7",
    firstName: "Tesssie ",
    lastName: "Hills ",
    email: "tessi222ehills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessi222sehills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessi22s2ehiwlls@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessi222swehills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessis222ehwills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessi222ehilwls@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
  {
    firstName: "Ignacio ",
    lastName: "Hills ",
    email: "tessi222ehillws@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
  },
];

console.log("👥 Users & Branches seeds...");
Branches.bulkCreate(Branchs).then(() => {
  Floors.bulkCreate(Floor).then(() => {
    Workspaces.bulkCreate(Workspace).then(() => {
      User_Profile.bulkCreate(Users).then(() =>
        User_Profile.create({
          branchId: "1",
          workspaceId: "6",
          access: "admin",
          firstName: "admin",
          lastName: "admin",
          email: "admin@globant.com",
          password: "1234",
          country: "",
          city: "",
          phone: "+54 11 4109-1700",
          job: "Front-End Developer",
        }).then(() => console.log("    ✓ Admin stage 1 seeded successfully!"))
      );
    });
  });
});
