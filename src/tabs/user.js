const users = [
  {
    id: 1,
    firstName: "Michael",
    lastName: "Jane",
    plaka: "16AB4567",
    arac_tipi: "Sedan",
    status: "active",
    alim: "28/09/2023",
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Emily",
    plaka: "33ZZ1234",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "13/08/2023",
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Michael",
    plaka: "06XY7890",
    arac_tipi: "Pickup",
    status: "active",
    alim: "16/09/2023",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Michael",
    plaka: "34FN5285",
    arac_tipi: "Hatchback",
    status: "active",
    alim: "13/09/2023",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Jane",
    plaka: "35JK1298",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "11/08/2023",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Emily",
    plaka: "06XY7890",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "19/08/2023",
  },
  {
    id: 7,
    firstName: "Michael",
    lastName: "Jane",
    plaka: "35JK1298",
    arac_tipi: "SUV",
    status: "active",
    alim: "27/09/2023",
  },
  {
    id: 8,
    firstName: "Jane",
    lastName: "John",
    plaka: "34FN5285",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "14/08/2023",
  },
  {
    id: 9,
    firstName: "Emily",
    lastName: "David",
    plaka: "33ZZ1234",
    arac_tipi: "Pickup",
    status: "pasif",
    alim: "01/08/2023",
  },
  {
    id: 10,
    firstName: "Michael",
    lastName: "John",
    plaka: "16AB4567",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "03/08/2023",
  },
  {
    id: 11,
    firstName: "Alice",
    lastName: "Smith",
    plaka: "39KL9876",
    arac_tipi: "Sedan",
    status: "active",
    alim: "26/09/2023",
  },
  {
    id: 12,
    firstName: "Bob",
    lastName: "Johnson",
    plaka: "17OP5432",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "12/08/2023",
  },
  {
    id: 13,
    firstName: "Carol",
    lastName: "Davis",
    plaka: "22QR6789",
    arac_tipi: "Pickup",
    status: "active",
    alim: "25/09/2023",
  },
  {
    id: 14,
    firstName: "David",
    lastName: "Wilson",
    plaka: "40MN4321",
    arac_tipi: "Hatchback",
    status: "active",
    alim: "26/09/2023",
  },
  {
    id: 15,
    firstName: "Eva",
    lastName: "Brown",
    plaka: "19UV1234",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "12/08/2023",
  },
  {
    id: 16,
    firstName: "Frank",
    lastName: "Lee",
    plaka: "22QR6789",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "19/08/2023",
  },
  {
    id: 17,
    firstName: "Grace",
    lastName: "Martin",
    plaka: "19UV1234",
    arac_tipi: "SUV",
    status: "active",
    alim: "16/09/2023",
  },
  {
    id: 18,
    firstName: "Helen",
    lastName: "Moore",
    plaka: "40MN4321",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "14/08/2023",
  },
  {
    id: 19,
    firstName: "Ivy",
    lastName: "Taylor",
    plaka: "17OP5432",
    arac_tipi: "Pickup",
    status: "pasif",
    alim: "29/08/2023",
  },
  {
    id: 20,
    firstName: "Jack",
    lastName: "White",
    plaka: "39KL9876",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "17/08/2023",
  },
  {
    id: 21,
    firstName: "Oliver",
    lastName: "Wilson",
    plaka: "33XY8765",
    arac_tipi: "Sedan",
    status: "active",
    alim: "02/10/2023",
  },
  {
    id: 22,
    firstName: "Sophia",
    lastName: "Johnson",
    plaka: "45AB4321",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "13/08/2023",
  },
  {
    id: 23,
    firstName: "Liam",
    lastName: "Davis",
    plaka: "27JK7890",
    arac_tipi: "SUV",
    status: "active",
    alim: "24/09/2023",
  },
  {
    id: 24,
    firstName: "Emma",
    lastName: "Smith",
    plaka: "36DE1234",
    arac_tipi: "Spor",
    status: "active",
    alim: "22/09/2023",
  },
  {
    id: 25,
    firstName: "Noah",
    lastName: "Brown",
    plaka: "31FG5678",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "10/08/2023",
  },
  {
    id: 26,
    firstName: "Ava",
    lastName: "Lee",
    plaka: "38CD9012",
    arac_tipi: "Pickup",
    status: "pasif",
    alim: "09/08/2023",
  },
  {
    id: 27,
    firstName: "William",
    lastName: "Martin",
    plaka: "41HI2345",
    arac_tipi: "SUV",
    status: "active",
    alim: "21/09/2023",
  },
  {
    id: 28,
    firstName: "Mia",
    lastName: "Moore",
    plaka: "44EF6789",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "07/08/2023",
  },
  {
    id: 29,
    firstName: "James",
    lastName: "Taylor",
    plaka: "29MN5432",
    arac_tipi: "Sedan",
    status: "active",
    alim: "20/09/2023",
  },
  {
    id: 30,
    firstName: "Charlotte",
    lastName: "White",
    plaka: "30OP1234",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "04/08/2023",
  },
  {
    id: 31,
    firstName: "Ella",
    lastName: "Jones",
    plaka: "37GH5678",
    arac_tipi: "Sedan",
    status: "active",
    alim: "27/09/2023",
  },
  {
    id: 32,
    firstName: "Jackson",
    lastName: "Garcia",
    plaka: "32IJ1234",
    arac_tipi: "SUV",
    status: "active",
    alim: "14/09/2023",
  },
  {
    id: 33,
    firstName: "Scarlett",
    lastName: "Harris",
    plaka: "28KL9012",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "18/08/2023",
  },
  {
    id: 34,
    firstName: "Lucas",
    lastName: "Clark",
    plaka: "40MN2345",
    arac_tipi: "Pickup",
    status: "pasif",
    alim: "28/08/2023",
  },
  {
    id: 35,
    firstName: "Lily",
    lastName: "Walker",
    plaka: "39OP6789",
    arac_tipi: "Sedan",
    status: "active",
    alim: "12/10/2023",
  },
  {
    id: 36,
    firstName: "Henry",
    lastName: "Lewis",
    plaka: "35QR1234",
    arac_tipi: "Spor",
    status: "pasif",
    alim: "12/07/2023",
  },
  {
    id: 37,
    firstName: "Aiden",
    lastName: "Perez",
    plaka: "26ST5678",
    arac_tipi: "Hatchback",
    status: "active",
    alim: "12/10/2023",
  },
  {
    id: 38,
    firstName: "Zoe",
    lastName: "Anderson",
    plaka: "42UV9012",
    arac_tipi: "SUV",
    status: "active",
    alim: "12/09/2023",
  },
  {
    id: 39,
    firstName: "Carter",
    lastName: "Turner",
    plaka: "43WX2345",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "12/06/2023",
  },
  {
    id: 40,
    firstName: "Grace",
    lastName: "Parker",
    plaka: "24YZ6789",
    arac_tipi: "Pickup",
    status: "pasif",
    alim: "12/05/2023",
  },
  {
    id: 41,
    firstName: "Benjamin",
    lastName: "Hall",
    plaka: "25AB1234",
    arac_tipi: "Sedan",
    status: "active",
    alim: "10/10/2023",
  },
  {
    id: 42,
    firstName: "Amelia",
    lastName: "Gonzalez",
    plaka: "46CD5678",
    arac_tipi: "SUV",
    status: "active",
    alim: "17/09/2023",
  },
  {
    id: 43,
    firstName: "Ethan",
    lastName: "Miller",
    plaka: "30EF9012",
    arac_tipi: "Hatchback",
    status: "pasif",
    alim: "12/02/2023",
  },
  {
    id: 44,
    firstName: "Olivia",
    lastName: "Martinez",
    plaka: "38GH2345",
    arac_tipi: "Sedan",
    status: "pasif",
    alim: "17/08/2023",
  },
  {
    id: 45,
    firstName: "Liam",
    lastName: "Davis",
    plaka: "41IJ6789",
    arac_tipi: "Spor",
    status: "active",
    alim: "19/09/2023",
  },
];
export default users;
