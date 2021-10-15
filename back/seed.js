const { User_Profile, Branches, Floors, Workspaces } = require("./models");
const faker = require("faker");

const Branchs = [
  {
    country: "Argentina",
    city: "Buenos Aires",
    address: "Correa 2442",
    CP: "C1429DRN",
    phone: "+54 11 4109-1700",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2019-03/1%20%282%29.jpg?itok=Z8MucHhy",
    latitude: "-34.61083857975935",
    longitude: "-58.366013518182754",
  },
  {
    country: "Argentina",
    city: "Mar del Plata",
    address: "Avenida Colón 1114",
    CP: "B7600FXR",
    phone: "+54 11 4109-1700",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2018-09/Mar%20del%20Plata.jpg?itok=5k7_CvH5",
    latitude: "-38.010905875787834",
    longitude: "-57.53568198627993",
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "5th Floor 36-38 Hatton Garden",
    CP: "EC1N 8EB",
    phone: "+44 20 7979-1885",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2018-09/london1.jpg?itok=sVZb3IFJ",
    latitude: "51.51955294772027",
    longitude: "-0.1817608012679515",
  },
  {
    country: "Romania",
    city: "Cluj-Napoca",
    address: "Strada Republicii 24",
    CP: "400000",
    phone: "+40-264-418-686",
    image:
      "https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2019-03/istockphoto-658396342-612x612.jpg?itok=OYNhIC4X",
    latitude: "46.764848721891745",
    longitude: "23.58737128474054",
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
    latitude: "40.45173576983989",
    longitude: "-3.691386472730997",
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
    image: "https://www.globant.com/sites/default/files/styles/news_details/public/2021-07/Globant%20Web%20%286%29.JPG?itok=K27TD3rv",
  },
  {
    floorId: "2",
    name: "Office ",
    image: "https://i.ytimg.com/vi/wwx-mju-gN0/maxresdefault.jpg",
  },
  {
    floorId: "3",
    name: "Office 1",
    image: "https://fotos.perfil.com/2021/03/03/trim/1280/720/globant-20210303-1136704.jpg",
  },
  {
    floorId: "4",
    name: "Office 1",
    image:
      "https://www.redusers.com/noticias/wp-content/uploads/2011/10/IMG_2324.jpg",
  },
  {
    floorId: "5",
    name: "Office 1",
    image: "https://www.infotechnology.com/files/image/98/98166/60eda138aad9e.jpg",
  },
  {
    floorId: "6",
    name: "Office 1",
    image:
      "https://i2.wp.com/www.ebizlatam.com/wp-content/uploads/2021/05/Globant-Bariloche.jpg?fit=787%2C524",
  },
  {
    floorId: "1",
    name: "Office 7",
    image:
      "https://images.squarespace-cdn.com/content/v1/598b56ce1e5b6cbabca9322f/1531930573013-LKHW0IC6Z2ELF5TEUB4H/globant5.jpg",
  },
  {
    floorId: "1",
    name: "Office 8",
    image:
      "https://www.icapglobal.com/arg/wp-content/uploads/2019/12/globant_portada.jpg",
  },
  {
    floorId: "1",
    name: "Office 9",
    image:
      "https://media.ambito.com/p/cfdb0224582f810a918572feb386ad17/adjuntos/239/imagenes/038/594/0038594437/globantjpg.jpg",
  },
  {
    floorId: "1",
    name: "Office 10",
    image:
      "https://phantom-expansion.unidadeditorial.es/1f32052d2c9668cc69bdcc7ed19fd480/crop/0x0/700x467/f/jpg/assets/multimedia/imagenes/2021/03/10/16153737474238.jpg",
  },
  {
    floorId: "1",
    name: "Office 11",
    image:
      "https://assets.iproup.com/assets/jpg/2020/07/11134.jpg?5.6.4",
  },
];

const Users = [
  {
    workspaceId: "1",
    firstName: "Ramiro",
    branchId: 1,
    lastName: "Arias",
    email: "ramiroarias@globant.com",
    password: "1234",
    country: "Argentina",
    city: "Buenos Aires",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "2",
    firstName: "Caterina",
    lastName: "Jones",
    branchId: 2,
    email: "caterinajones@globant.com",
    password: "1234",
    country: "United Kingdom",
    city: "London",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "3",
    firstName: "Dock",
    branchId: 3,
    lastName: "Koch",
    email: "dockkoch@globant.com",
    password: "1234",
    country: "Romania",
    city: "Cluj-Napoca",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "4",
    firstName: "Gabriel",
    lastName: "Rama",
    branchId: 4,
    email: "gabrielrama@globant.com",
    password: "1234",
    country: "Argentina",
    city: "Mar del Plata",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "5",
    firstName: "Tessie ",
    lastName: "Hills ",
    branchId: 5,
    email: "tessiehills@globant.com",
    password: "1234",
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "7",
    firstName: "Tesssie ",
    lastName: "Coleman ",
    email: "tessi222ehills@globant.com",
    password: "1234",
    branchId: 1,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "8",
    firstName: "Ignacio ",
    lastName: "Perez ",
    email: "iperez@globant.com",
    password: "1234",
    branchId: 1,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "9",
    firstName: "Ignacio ",
    lastName: "Camar ",
    email: "icamar@globant.com",
    password: "1234",
    country: "Spain",
    branchId: 1,
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "10",
    firstName: "Ignacio ",
    lastName: "Lopez ",
    email: "ilopez@globant.com",
    password: "1234",
    branchId: 1,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "11",
    firstName: "Ignacio ",
    lastName: "Totor ",
    email: "itotor@globant.com",
    password: "1234",
    country: "Spain",
    branchId: 1,
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      faker.image.avatar(),
  },
  {
    workspaceId: "12",
    firstName: "Ignacio ",
    lastName: "Martinez ",
    email: "imartinez@globant.com",
    password: "1234",
    branchId: 1,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      faker.image.avatar(),
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
          firstName: "Ignacio",
          lastName: "Rodriguez",
          email: "admin@globant.com",
          password: "1234",
          country: "Argentina",
          city: "Buenos Aires",
          phone: "+54 11 4109-1700",
          job: "Front-End Developer",
          profilePhoto:
            faker.image.avatar(),
        }).then(() =>
          User_Profile.create({
            branchId: "1",
            workspaceId: "1",
            access: "user",
            firstName: "Augusto",
            lastName: "Rosello",
            email: "admin2@globant.com",
            password: "1234",
            country: "Estados Unidos",
            city: "Nueva York",
            phone: "+54 11 4109-1700",
            job: "Front-End Developer",
            profilePhoto:
              faker.image.avatar(),
          }).then(() => console.log("    ✓ Admin stage 1 seeded successfully!"))
        )
      );
    });
  });
});

