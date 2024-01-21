import Mock from "../mock";

const users = [
  {
    id: "5a7b73f76bed15c94d1e46d4",
    index: 0,
    guid: "c01da2d1-07f8-4acc-a1e3-72dda7310af8",
    isActive: false,
    balance: 2838.08,
    age: 30000,
    name: "OIL AND GAS",
    leader: "Thomas Leasley",
    gender: "female",
    company: "ACIUM",
    email: "stefaniemarsh@acium.com",
    phone: "+1 (857) 535-2066",
    address: "163 Poplar Avenue, Cliffside, Virginia, 4592",
    bd: "2015-02-08T04:28:44 -06:00",
    imgUrl: "/assets/images/1.png",
  },
  {
    id: "5a7b73f7f79f4250b96a355a",
    index: 1,
    guid: "3f04aa40-62da-466d-ac14-2b8a5da3d1ce",
    isActive: true,
    balance: 3043.81,
    age: 39000,
    name: "Mediclinic Parking Garage",
    gender: "female",
    company: "FIBRODYNE",
    email: "elenabennett@fibrodyne.com",
    phone: "+1 (994) 570-2070",
    address: "526 Grace Court, Cherokee, Oregon, 7017",
    bd: "2017-11-15T09:04:57 -06:00",
    imgUrl: "/assets/images/2.png",
  },
  {
    id: "5a7b73f78b64a02a67204d6e",
    index: 2,
    guid: "e7d9d61e-b657-4fcf-b069-2eb9bfdc44fa",
    isActive: true,
    balance: 1796.92,
    age: 39000,
    name: " Taung Water Supply Scheme",
    gender: "female",
    company: "POWERNET",
    email: "jonicabrera@powernet.com",
    phone: "+1 (848) 410-2368",
    address: "554 Barlow Drive, Alamo, Michigan, 3686",
    bd: "2017-10-15T12:55:51 -06:00",
    imgUrl: "/assets/images/3.png",
  },
  {
    id: "5a7b73f7572e59b231149b94",
    index: 3,
    guid: "47673d82-ab31-48a1-8a16-2c6701573c67",
    isActive: false,
    balance: 2850.27,
    age: 37000,
    name: "Preller Street Roads",
    gender: "male",
    company: "ZILLAR",
    email: "gallaghershaw@zillar.com",
    phone: "+1 (896) 422-3786",
    address: "111 Argyle Road, Graball, Idaho, 7272",
    bd: "2017-11-19T03:38:30 -06:00",
    imgUrl: "/assets/images/3.jpg",
  },
  {
    id: "5a7b73f70f9d074552e13090",
    index: 4,
    guid: "bc9c7cd3-04e0-4095-a933-af28efaf3b3e",
    isActive: false,
    balance: 3743.48,
    age: 39000,
    name: "Grootvlei Prison Sewerage",
    gender: "male",
    company: "ACRODANCE",
    email: "blanchardknapp@acrodance.com",
    phone: "+1 (867) 542-2772",
    address: "707 Malta Street, Yukon, Wyoming, 6861",
    bd: "2014-05-28T01:33:58 -06:00",
    imgUrl: "/assets/images/4.png",
  },
  {
    id: "5a7b73f78988bd6e92650473",
    index: 5,
    guid: "08cb947c-e49c-4736-9687-0fca0992ec38",
    isActive: false,
    balance: 3453.79,
    age: 39000,
    name: "Premier Hotel, Zastron",
    gender: "male",
    company: "SLAMBDA",
    email: "parkerrivas@slambda.com",
    phone: "+1 (997) 413-2418",
    address: "543 Roosevelt Place, Tibbie, Minnesota, 6944",
    bd: "2015-01-05T09:55:23 -06:00",
    imgUrl: "/assets/images/1.png",
  },
  {
    id: "5a7b73f72488770f90649570",
    index: 6,
    guid: "771c85d5-7762-4bae-96fd-09892a9c4374",
    isActive: false,
    balance: 3334.73,
    age: 39000,
    name: "Sehlabeng School Ladybrand",
    gender: "female",
    company: "EQUITOX",
    email: "alexandriaforbes@equitox.com",
    phone: "+1 (869) 521-2533",
    address: "663 Minna Street, Omar, Alabama, 5265",
    bd: "2017-03-09T05:48:57 -06:00",
    imgUrl: "/assets/images/2.png",
  },
  {
    id: "5a7b73f7c576e368b321a705",
    index: 7,
    guid: "2455a7ef-a537-46e1-a210-75e5e2187460",
    isActive: false,
    balance: 3488.64,
    age: 37000,
    name: "Heimat Phase2 ",
    gender: "female",
    company: "AFFLUEX",
    email: "lessiewise@affluex.com",
    phone: "+1 (820) 404-2967",
    address: "752 Woodhull Street, Utting, Oklahoma, 2739",
    bd: "2014-10-21T03:09:34 -06:00",
    imgUrl: "/assets/images/3.png",
  },
  {
    id: "5a7b73f705f8a9c6e35c8ca2",
    index: 8,
    guid: "a90d65a8-681d-462f-bf08-eceeef366375",
    isActive: true,
    balance: 3786.67,
    age: 39000,
    name: "Manyatseng Recreational",
    gender: "female",
    company: "VIRVA",
    email: "carriegates@virva.com",
    phone: "+1 (845) 463-3986",
    address: "561 Boulevard Court, Rote, Louisiana, 8458",
    bd: "2017-03-30T02:06:23 -06:00",
    imgUrl: "/assets/images/4.png",
  },
  {
    id: "5a7b73f7a3e2be2dbb7b093e",
    index: 9,
    guid: "fb3d0f97-91ae-4336-b0b4-19f4a00fe567",
    isActive: false,
    balance: 3335.5,
    age: 39000,
    name: "Ventersburg Bloodline",
    gender: "male",
    company: "MIRACLIS",
    email: "daltonspears@miraclis.com",
    phone: "+1 (919) 541-3528",
    address: "167 Lester Court, Glasgow, Arkansas, 6311",
    bd: "2017-04-01T01:41:12 -06:00",
    imgUrl: "/assets/images/3.jpg",
  },
  {
    id: "5a7b73f716de69a9217c1273",
    index: 10,
    guid: "129a92fd-848f-48eb-98a1-aebf6e92b079",
    isActive: false,
    balance: 3811.15,
    age: 30000,
    name: "Re-gravel of streets around",
    gender: "female",
    company: "COMTEST",
    email: "deliamerrill@comtest.com",
    phone: "+1 (879) 401-2304",
    address: "761 Polhemus Place, Kidder, Puerto Rico, 5901",
    bd: "2014-08-29T08:42:59 -06:00",
    imgUrl: "/assets/images/1.png",
  },
  {
    id: "5a7b73f7ed19007bed2d29fb",
    index: 11,
    guid: "d799b69a-192d-4ee3-9a69-9e8e5afc45b0",
    isActive: false,
    balance: 3935.82,
    age: 28,
    name: "Truck Stop Buildings",
    gender: "male",
    company: "CYCLONICA",
    email: "vanceaguilar@cyclonica.com",
    phone: "+1 (972) 549-2681",
    address: "653 Billings Place, Gardners, Connecticut, 7805",
    bd: "2015-02-21T03:06:14 -06:00",
    imgUrl: "/assets/images/2.png",
  },
  {
    id: "5a7b73f78d0dc0858a70c44a",
    index: 12,
    guid: "8cbb37bb-7644-4993-b48b-df3a69deb339",
    isActive: true,
    balance: 3868.95,
    age: 28,
    name: " Anjum Properties",
    gender: "male",
    company: "NORSUP",
    email: "adamsharper@norsup.com",
    phone: "+1 (824) 494-3395",
    address: "571 Turner Place, Norris, Mississippi, 3829",
    bd: "2014-01-30T02:05:53 -06:00",
    imgUrl: "/assets/images/3.png",
  },
  {
    id: "5a7b73f7e929494a8568a885",
    index: 13,
    guid: "22ec32d7-0ba9-4366-b6d8-ca16389a2cd9",
    isActive: false,
    balance: 3954.41,
    age: 39000,
    name: "Maqhekung Phase",
    gender: "male",
    company: "CIRCUM",
    email: "basssexton@circum.com",
    phone: "+1 (930) 476-3634",
    address: "563 Victor Road, Richmond, Kansas, 7742",
    bd: "2014-05-04T10:16:32 -06:00",
    imgUrl: "/assets/images/4.png",
  },
  
];

Mock.onGet("/api/user/all").reply(() => {
  return [200, users];
});

Mock.onGet("/api/user").reply((config) => {
  const id = config.data;
  const response = users.find((user) => user.id === id);
  return [200, response];
});

Mock.onPost("/api/user/delete").reply((config) => {
  let user = JSON.parse(config.data);
  const updatedUsers = users.filter((item) => item.id !== user.id);

  return [200, updatedUsers];
});

Mock.onPost("/api/user/update").reply((config) => {
  let user = JSON.parse(config.data);

  if (user.id) {
    const updatedUsers = users.map((item) => (item.id === user.id ? { ...item, ...user } : item));
    return [200, updatedUsers];
  }

  return [200, users];
});

Mock.onPost("/api/user/add").reply((config) => {
  let user = JSON.parse(config.data);
  users.push(user);

  return [200, users];
});
