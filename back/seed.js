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
    image:
      "https://www.globant.com/sites/default/files/styles/news_details/public/2021-07/Globant%20Web%20%286%29.JPG?itok=K27TD3rv",
  },
  {
    floorId: "2",
    name: "Office 1",
    image: "https://i.ytimg.com/vi/wwx-mju-gN0/maxresdefault.jpg",
  },
  {
    floorId: "3",
    name: "Office 1",
    image:
      "https://fotos.perfil.com/2021/03/03/trim/1280/720/globant-20210303-1136704.jpg",
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
    image:
      "https://www.infotechnology.com/files/image/98/98166/60eda138aad9e.jpg",
  },
  {
    floorId: "6",
    name: "Office 1",
    image:
      "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2021/07/20529.jpg?7.1.0",
  },
];

const Users = [
  {
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
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Perfil-Berna.jpg",
  },
  {
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
      "https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg",
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
      "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1576497340/content-items/003/518/329/_MG_5442-original.jpg?1576497340",
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
      "https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg",
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
      "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/05/extranos-pueden-elegir-mejores-fotos-de-perfil.jpg",
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
      "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
  },
  {
    firstName: "Ignacio ",
    lastName: "Perez ",
    email: "tessi222sehills@globant.com",
    password: "1234",
    branchId: 2,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      "https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg",
  },
  {
    firstName: "Ignacio ",
    lastName: "Camar ",
    email: "tessi22s2ehiwlls@globant.com",
    password: "1234",
    country: "Spain",
    branchId: 3,
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      "http://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg",
  },
  {
    firstName: "Ignacio ",
    lastName: "Lopez ",
    email: "tessi222swehills@globant.com",
    password: "1234",
    branchId: 4,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      "https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg",
  },
  {
    firstName: "Ignacio ",
    lastName: "Totor ",
    email: "tessis222ehwills@globant.com",
    password: "1234",
    country: "Spain",
    branchId: 5,
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/07/foto-perfil-5.jpg?resize=1024%2C694&ssl=1",
  },
  {
    firstName: "Ignacio ",
    lastName: "Martinez ",
    email: "tessi222ehillws@globant.com",
    password: "1234",
    branchId: 2,
    country: "Spain",
    city: "Madrid",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "40.45206561667841",
    longitude: "-3.6915253170713465",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OPxZwwFmuCMsU9O5LspMidHDim3ZeQ56L0f_3keEjo7tkl2CUvNuUy_izpwZzM1Y94Q&usqp=CAU",
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
            "https://www.rutanmedellin.org/images/1pruebas/foto-persona.jpg",
        }).then(() =>
          User_Profile.create({
            branchId: "1",
            workspaceId: "6",
            access: "admin",
            firstName: "Augusto",
            lastName: "Rosello",
            email: "admin2@globant.com",
            password: "1234",
            country: "Estados Unidos",
            city: "Nueva York",
            phone: "+54 11 4109-1700",
            job: "Front-End Developer",
            profilePhoto:
              "https://eststatic.com/2015/conversions/virtudes-de-una-persona-large.jpg",
          }).then(() => console.log("    ✓ Admin stage 1 seeded successfully!"))
        )
      );
    });
  });
});
