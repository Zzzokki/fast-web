import React, { useState, useRef } from "react";
import styles from "../../styles/components/classroom/ClassroomTable.module.css";

import Fullname from "./fullname";

const data = [
  {
    firstname: "Dulcinea",
    lastname: "Chandler",
    attendance: [
      {
        date: "03, 07",
        value: 2,
      },
      {
        date: "01, 06",
        value: 0,
      },
      {
        date: "06, 26",
        value: 0,
      },
      {
        date: "10, 03",
        value: 0,
      },
      {
        date: "05, 15",
        value: 0,
      },
      {
        date: "03, 26",
        value: 2,
      },
      {
        date: "12, 05",
        value: 2,
      },
      {
        date: "09, 20",
        value: 0,
      },
      {
        date: "02, 04",
        value: 0,
      },
      {
        date: "08, 30",
        value: 2,
      },
      {
        date: "07, 26",
        value: 0,
      },
      {
        date: "07, 29",
        value: 2,
      },
      {
        date: "05, 06",
        value: 2,
      },
      {
        date: "06, 11",
        value: 1,
      },
      {
        date: "04, 13",
        value: 1,
      },
      {
        date: "07, 09",
        value: 1,
      },
      {
        date: "07, 27",
        value: 1,
      },
      {
        date: "02, 26",
        value: 1,
      },
      {
        date: "04, 18",
        value: 0,
      },
      {
        date: "09, 19",
        value: 0,
      },
      {
        date: "10, 17",
        value: 0,
      },
      {
        date: "01, 28",
        value: 0,
      },
      {
        date: "12, 28",
        value: 2,
      },
      {
        date: "12, 16",
        value: 1,
      },
      {
        date: "05, 07",
        value: 0,
      },
      {
        date: "04, 27",
        value: 2,
      },
      {
        date: "10, 15",
        value: 2,
      },
      {
        date: "04, 17",
        value: 2,
      },
      {
        date: "03, 05",
        value: 2,
      },
      {
        date: "07, 14",
        value: 0,
      },
    ],
  },
  {
    firstname: "Taffy",
    lastname: "Vharat",
    attendance: [
      {
        date: "05, 11",
        value: 2,
      },
      {
        date: "12, 28",
        value: 1,
      },
      {
        date: "08, 28",
        value: 2,
      },
      {
        date: "10, 31",
        value: 2,
      },
      {
        date: "10, 30",
        value: 0,
      },
      {
        date: "03, 09",
        value: 1,
      },
      {
        date: "04, 17",
        value: 1,
      },
      {
        date: "03, 13",
        value: 2,
      },
      {
        date: "08, 29",
        value: 1,
      },
      {
        date: "01, 03",
        value: 1,
      },
      {
        date: "01, 04",
        value: 0,
      },
      {
        date: "02, 10",
        value: 1,
      },
      {
        date: "02, 22",
        value: 2,
      },
      {
        date: "07, 06",
        value: 2,
      },
      {
        date: "11, 23",
        value: 0,
      },
      {
        date: "10, 30",
        value: 0,
      },
      {
        date: "04, 19",
        value: 2,
      },
      {
        date: "03, 29",
        value: 2,
      },
      {
        date: "07, 31",
        value: 0,
      },
      {
        date: "08, 13",
        value: 2,
      },
      {
        date: "01, 08",
        value: 2,
      },
      {
        date: "07, 14",
        value: 0,
      },
      {
        date: "11, 29",
        value: 1,
      },
      {
        date: "04, 28",
        value: 1,
      },
      {
        date: "03, 21",
        value: 1,
      },
      {
        date: "09, 09",
        value: 1,
      },
      {
        date: "06, 22",
        value: 2,
      },
      {
        date: "01, 01",
        value: 1,
      },
      {
        date: "07, 12",
        value: 0,
      },
      {
        date: "11, 02",
        value: 1,
      },
    ],
  },
  {
    firstname: "Pearline",
    lastname: "Myrilla",
    attendance: [
      {
        date: "12, 26",
        value: 0,
      },
      {
        date: "10, 15",
        value: 0,
      },
      {
        date: "12, 26",
        value: 0,
      },
      {
        date: "04, 26",
        value: 0,
      },
      {
        date: "08, 11",
        value: 0,
      },
      {
        date: "06, 04",
        value: 2,
      },
      {
        date: "03, 11",
        value: 1,
      },
      {
        date: "12, 28",
        value: 0,
      },
      {
        date: "05, 23",
        value: 2,
      },
      {
        date: "05, 26",
        value: 2,
      },
      {
        date: "11, 30",
        value: 2,
      },
      {
        date: "05, 10",
        value: 1,
      },
      {
        date: "08, 14",
        value: 1,
      },
      {
        date: "06, 26",
        value: 2,
      },
      {
        date: "11, 28",
        value: 2,
      },
      {
        date: "07, 22",
        value: 0,
      },
      {
        date: "03, 04",
        value: 1,
      },
      {
        date: "12, 26",
        value: 0,
      },
      {
        date: "06, 13",
        value: 0,
      },
      {
        date: "04, 04",
        value: 1,
      },
      {
        date: "05, 27",
        value: 0,
      },
      {
        date: "11, 14",
        value: 1,
      },
      {
        date: "04, 30",
        value: 0,
      },
      {
        date: "06, 30",
        value: 1,
      },
      {
        date: "03, 27",
        value: 1,
      },
      {
        date: "06, 09",
        value: 1,
      },
      {
        date: "07, 01",
        value: 1,
      },
      {
        date: "05, 09",
        value: 2,
      },
      {
        date: "01, 04",
        value: 1,
      },
      {
        date: "07, 16",
        value: 2,
      },
    ],
  },
  {
    firstname: "Loree",
    lastname: "Craggie",
    attendance: [
      {
        date: "07, 24",
        value: 2,
      },
      {
        date: "07, 12",
        value: 2,
      },
      {
        date: "04, 23",
        value: 2,
      },
      {
        date: "04, 02",
        value: 2,
      },
      {
        date: "10, 15",
        value: 0,
      },
      {
        date: "10, 08",
        value: 1,
      },
      {
        date: "01, 24",
        value: 1,
      },
      {
        date: "05, 29",
        value: 2,
      },
      {
        date: "03, 26",
        value: 0,
      },
      {
        date: "10, 22",
        value: 1,
      },
      {
        date: "03, 13",
        value: 1,
      },
      {
        date: "04, 14",
        value: 0,
      },
      {
        date: "08, 06",
        value: 2,
      },
      {
        date: "06, 05",
        value: 0,
      },
      {
        date: "05, 18",
        value: 0,
      },
      {
        date: "01, 20",
        value: 0,
      },
      {
        date: "07, 02",
        value: 0,
      },
      {
        date: "07, 28",
        value: 2,
      },
      {
        date: "08, 16",
        value: 0,
      },
      {
        date: "02, 10",
        value: 0,
      },
      {
        date: "01, 30",
        value: 2,
      },
      {
        date: "07, 14",
        value: 0,
      },
      {
        date: "09, 07",
        value: 1,
      },
      {
        date: "09, 19",
        value: 2,
      },
      {
        date: "03, 30",
        value: 1,
      },
      {
        date: "08, 03",
        value: 1,
      },
      {
        date: "04, 14",
        value: 1,
      },
      {
        date: "02, 16",
        value: 0,
      },
      {
        date: "11, 27",
        value: 2,
      },
      {
        date: "07, 01",
        value: 1,
      },
    ],
  },
  {
    firstname: "Dianemarie",
    lastname: "Joeann",
    attendance: [
      {
        date: "11, 25",
        value: 2,
      },
      {
        date: "02, 23",
        value: 2,
      },
      {
        date: "03, 15",
        value: 2,
      },
      {
        date: "01, 04",
        value: 1,
      },
      {
        date: "02, 13",
        value: 1,
      },
      {
        date: "06, 16",
        value: 2,
      },
      {
        date: "11, 03",
        value: 2,
      },
      {
        date: "12, 23",
        value: 2,
      },
      {
        date: "03, 20",
        value: 1,
      },
      {
        date: "07, 14",
        value: 2,
      },
      {
        date: "01, 13",
        value: 1,
      },
      {
        date: "01, 08",
        value: 0,
      },
      {
        date: "05, 08",
        value: 2,
      },
      {
        date: "04, 20",
        value: 0,
      },
      {
        date: "12, 04",
        value: 1,
      },
      {
        date: "08, 03",
        value: 1,
      },
      {
        date: "09, 19",
        value: 0,
      },
      {
        date: "05, 18",
        value: 1,
      },
      {
        date: "02, 06",
        value: 2,
      },
      {
        date: "05, 17",
        value: 2,
      },
      {
        date: "07, 09",
        value: 2,
      },
      {
        date: "05, 18",
        value: 2,
      },
      {
        date: "02, 23",
        value: 0,
      },
      {
        date: "11, 04",
        value: 0,
      },
      {
        date: "03, 03",
        value: 2,
      },
      {
        date: "05, 01",
        value: 1,
      },
      {
        date: "10, 01",
        value: 2,
      },
      {
        date: "08, 26",
        value: 1,
      },
      {
        date: "08, 31",
        value: 1,
      },
      {
        date: "12, 16",
        value: 0,
      },
    ],
  },
  {
    firstname: "Dianemarie",
    lastname: "Joeann",
    attendance: [
      {
        date: "11, 25",
        value: 2,
      },
      {
        date: "02, 23",
        value: 2,
      },
      {
        date: "03, 15",
        value: 2,
      },
      {
        date: "01, 04",
        value: 1,
      },
      {
        date: "02, 13",
        value: 1,
      },
      {
        date: "06, 16",
        value: 2,
      },
      {
        date: "11, 03",
        value: 2,
      },
      {
        date: "12, 23",
        value: 2,
      },
      {
        date: "03, 20",
        value: 1,
      },
      {
        date: "07, 14",
        value: 2,
      },
      {
        date: "01, 13",
        value: 1,
      },
      {
        date: "01, 08",
        value: 0,
      },
      {
        date: "05, 08",
        value: 2,
      },
      {
        date: "04, 20",
        value: 0,
      },
      {
        date: "12, 04",
        value: 1,
      },
      {
        date: "08, 03",
        value: 1,
      },
      {
        date: "09, 19",
        value: 0,
      },
      {
        date: "05, 18",
        value: 1,
      },
      {
        date: "02, 06",
        value: 2,
      },
      {
        date: "05, 17",
        value: 2,
      },
      {
        date: "07, 09",
        value: 2,
      },
      {
        date: "05, 18",
        value: 2,
      },
      {
        date: "02, 23",
        value: 0,
      },
      {
        date: "11, 04",
        value: 0,
      },
      {
        date: "03, 03",
        value: 2,
      },
      {
        date: "05, 01",
        value: 1,
      },
      {
        date: "10, 01",
        value: 2,
      },
      {
        date: "08, 26",
        value: 1,
      },
      {
        date: "08, 31",
        value: 1,
      },
      {
        date: "12, 16",
        value: 0,
      },
    ],
  },
  {
    firstname: "Deedee",
    lastname: "Rosette",
    attendance: [
      {
        date: "08, 31",
        value: 1,
      },
      {
        date: "04, 14",
        value: 1,
      },
      {
        date: "06, 15",
        value: 1,
      },
      {
        date: "08, 19",
        value: 0,
      },
      {
        date: "06, 16",
        value: 1,
      },
      {
        date: "06, 13",
        value: 2,
      },
      {
        date: "12, 08",
        value: 2,
      },
      {
        date: "06, 13",
        value: 2,
      },
      {
        date: "04, 03",
        value: 2,
      },
      {
        date: "07, 28",
        value: 1,
      },
      {
        date: "02, 13",
        value: 1,
      },
      {
        date: "09, 06",
        value: 1,
      },
      {
        date: "11, 07",
        value: 1,
      },
      {
        date: "01, 01",
        value: 0,
      },
      {
        date: "10, 30",
        value: 1,
      },
      {
        date: "05, 27",
        value: 1,
      },
      {
        date: "07, 11",
        value: 2,
      },
      {
        date: "12, 27",
        value: 0,
      },
      {
        date: "09, 06",
        value: 2,
      },
      {
        date: "05, 20",
        value: 1,
      },
      {
        date: "05, 31",
        value: 0,
      },
      {
        date: "04, 07",
        value: 0,
      },
      {
        date: "08, 13",
        value: 0,
      },
      {
        date: "04, 11",
        value: 2,
      },
      {
        date: "08, 09",
        value: 1,
      },
      {
        date: "06, 11",
        value: 1,
      },
      {
        date: "01, 28",
        value: 1,
      },
      {
        date: "01, 18",
        value: 2,
      },
      {
        date: "04, 29",
        value: 0,
      },
      {
        date: "02, 03",
        value: 0,
      },
    ],
  },
  {
    firstname: "Nita",
    lastname: "Germann",
    attendance: [
      {
        date: "07, 25",
        value: 0,
      },
      {
        date: "01, 06",
        value: 0,
      },
      {
        date: "01, 10",
        value: 1,
      },
      {
        date: "09, 08",
        value: 2,
      },
      {
        date: "12, 14",
        value: 1,
      },
      {
        date: "01, 31",
        value: 2,
      },
      {
        date: "06, 26",
        value: 2,
      },
      {
        date: "01, 20",
        value: 0,
      },
      {
        date: "03, 01",
        value: 2,
      },
      {
        date: "06, 01",
        value: 1,
      },
      {
        date: "10, 12",
        value: 0,
      },
      {
        date: "09, 22",
        value: 0,
      },
      {
        date: "07, 20",
        value: 1,
      },
      {
        date: "11, 17",
        value: 0,
      },
      {
        date: "12, 15",
        value: 0,
      },
      {
        date: "04, 11",
        value: 1,
      },
      {
        date: "12, 05",
        value: 2,
      },
      {
        date: "03, 05",
        value: 2,
      },
      {
        date: "11, 21",
        value: 1,
      },
      {
        date: "11, 26",
        value: 0,
      },
      {
        date: "03, 17",
        value: 1,
      },
      {
        date: "11, 08",
        value: 1,
      },
      {
        date: "01, 29",
        value: 2,
      },
      {
        date: "11, 09",
        value: 2,
      },
      {
        date: "11, 30",
        value: 2,
      },
      {
        date: "07, 31",
        value: 1,
      },
      {
        date: "10, 29",
        value: 0,
      },
      {
        date: "01, 26",
        value: 0,
      },
      {
        date: "04, 16",
        value: 1,
      },
      {
        date: "09, 26",
        value: 1,
      },
    ],
  },
  {
    firstname: "Kristan",
    lastname: "Buttaro",
    attendance: [
      {
        date: "01, 27",
        value: 2,
      },
      {
        date: "04, 19",
        value: 1,
      },
      {
        date: "03, 25",
        value: 2,
      },
      {
        date: "06, 20",
        value: 0,
      },
      {
        date: "05, 17",
        value: 2,
      },
      {
        date: "01, 18",
        value: 1,
      },
      {
        date: "05, 18",
        value: 2,
      },
      {
        date: "06, 10",
        value: 2,
      },
      {
        date: "12, 17",
        value: 1,
      },
      {
        date: "04, 23",
        value: 2,
      },
      {
        date: "01, 15",
        value: 2,
      },
      {
        date: "08, 01",
        value: 2,
      },
      {
        date: "04, 29",
        value: 1,
      },
      {
        date: "05, 06",
        value: 1,
      },
      {
        date: "06, 21",
        value: 0,
      },
      {
        date: "11, 23",
        value: 1,
      },
      {
        date: "08, 20",
        value: 0,
      },
      {
        date: "08, 08",
        value: 2,
      },
      {
        date: "09, 16",
        value: 2,
      },
      {
        date: "06, 29",
        value: 2,
      },
      {
        date: "06, 13",
        value: 0,
      },
      {
        date: "09, 21",
        value: 2,
      },
      {
        date: "04, 26",
        value: 1,
      },
      {
        date: "12, 08",
        value: 1,
      },
      {
        date: "04, 20",
        value: 1,
      },
      {
        date: "01, 29",
        value: 2,
      },
      {
        date: "02, 25",
        value: 1,
      },
      {
        date: "09, 30",
        value: 1,
      },
      {
        date: "12, 05",
        value: 1,
      },
      {
        date: "02, 15",
        value: 2,
      },
    ],
  },
  {
    firstname: "Zondra",
    lastname: "Kimmie",
    attendance: [
      {
        date: "05, 16",
        value: 1,
      },
      {
        date: "01, 25",
        value: 0,
      },
      {
        date: "07, 08",
        value: 0,
      },
      {
        date: "12, 01",
        value: 2,
      },
      {
        date: "12, 06",
        value: 0,
      },
      {
        date: "01, 27",
        value: 0,
      },
      {
        date: "04, 05",
        value: 2,
      },
      {
        date: "07, 29",
        value: 0,
      },
      {
        date: "09, 27",
        value: 1,
      },
      {
        date: "01, 19",
        value: 0,
      },
      {
        date: "03, 01",
        value: 1,
      },
      {
        date: "11, 20",
        value: 2,
      },
      {
        date: "10, 19",
        value: 1,
      },
      {
        date: "01, 25",
        value: 1,
      },
      {
        date: "08, 10",
        value: 1,
      },
      {
        date: "08, 04",
        value: 2,
      },
      {
        date: "06, 30",
        value: 1,
      },
      {
        date: "01, 15",
        value: 0,
      },
      {
        date: "11, 27",
        value: 2,
      },
      {
        date: "04, 07",
        value: 1,
      },
      {
        date: "04, 19",
        value: 1,
      },
      {
        date: "01, 30",
        value: 1,
      },
      {
        date: "10, 16",
        value: 2,
      },
      {
        date: "10, 28",
        value: 1,
      },
      {
        date: "10, 03",
        value: 2,
      },
      {
        date: "03, 29",
        value: 2,
      },
      {
        date: "10, 10",
        value: 2,
      },
      {
        date: "03, 03",
        value: 1,
      },
      {
        date: "08, 10",
        value: 1,
      },
      {
        date: "05, 03",
        value: 1,
      },
    ],
  },
  {
    firstname: "Rosabelle",
    lastname: "Wadell",
    attendance: [
      {
        date: "05, 24",
        value: 2,
      },
      {
        date: "06, 06",
        value: 1,
      },
      {
        date: "05, 17",
        value: 0,
      },
      {
        date: "03, 08",
        value: 2,
      },
      {
        date: "01, 28",
        value: 0,
      },
      {
        date: "09, 30",
        value: 1,
      },
      {
        date: "05, 19",
        value: 0,
      },
      {
        date: "10, 11",
        value: 0,
      },
      {
        date: "11, 04",
        value: 0,
      },
      {
        date: "07, 28",
        value: 1,
      },
      {
        date: "07, 29",
        value: 2,
      },
      {
        date: "06, 17",
        value: 1,
      },
      {
        date: "08, 10",
        value: 0,
      },
      {
        date: "09, 20",
        value: 0,
      },
      {
        date: "02, 27",
        value: 2,
      },
      {
        date: "02, 13",
        value: 2,
      },
      {
        date: "06, 08",
        value: 1,
      },
      {
        date: "10, 15",
        value: 1,
      },
      {
        date: "03, 27",
        value: 0,
      },
      {
        date: "07, 22",
        value: 1,
      },
      {
        date: "10, 19",
        value: 0,
      },
      {
        date: "07, 21",
        value: 2,
      },
      {
        date: "10, 10",
        value: 2,
      },
      {
        date: "04, 18",
        value: 2,
      },
      {
        date: "12, 22",
        value: 1,
      },
      {
        date: "12, 19",
        value: 1,
      },
      {
        date: "02, 07",
        value: 0,
      },
      {
        date: "12, 03",
        value: 2,
      },
      {
        date: "05, 31",
        value: 2,
      },
      {
        date: "02, 14",
        value: 0,
      },
    ],
  },
  {
    firstname: "Emelina",
    lastname: "Adalbert",
    attendance: [
      {
        date: "02, 14",
        value: 0,
      },
      {
        date: "06, 05",
        value: 1,
      },
      {
        date: "01, 27",
        value: 2,
      },
      {
        date: "09, 12",
        value: 0,
      },
      {
        date: "12, 23",
        value: 0,
      },
      {
        date: "09, 29",
        value: 0,
      },
      {
        date: "05, 11",
        value: 2,
      },
      {
        date: "12, 24",
        value: 2,
      },
      {
        date: "03, 13",
        value: 1,
      },
      {
        date: "02, 17",
        value: 1,
      },
      {
        date: "06, 04",
        value: 1,
      },
      {
        date: "10, 04",
        value: 2,
      },
      {
        date: "04, 02",
        value: 0,
      },
      {
        date: "11, 25",
        value: 2,
      },
      {
        date: "01, 26",
        value: 1,
      },
      {
        date: "07, 10",
        value: 0,
      },
      {
        date: "06, 12",
        value: 0,
      },
      {
        date: "03, 20",
        value: 2,
      },
      {
        date: "10, 07",
        value: 1,
      },
      {
        date: "03, 09",
        value: 2,
      },
      {
        date: "06, 04",
        value: 0,
      },
      {
        date: "02, 21",
        value: 2,
      },
      {
        date: "12, 27",
        value: 0,
      },
      {
        date: "06, 27",
        value: 2,
      },
      {
        date: "12, 07",
        value: 0,
      },
      {
        date: "06, 29",
        value: 0,
      },
      {
        date: "06, 09",
        value: 0,
      },
      {
        date: "09, 14",
        value: 2,
      },
      {
        date: "07, 17",
        value: 0,
      },
      {
        date: "04, 30",
        value: 1,
      },
    ],
  },
  {
    firstname: "Priscilla",
    lastname: "Salvidor",
    attendance: [
      {
        date: "08, 20",
        value: 0,
      },
      {
        date: "03, 15",
        value: 0,
      },
      {
        date: "02, 19",
        value: 0,
      },
      {
        date: "08, 15",
        value: 1,
      },
      {
        date: "04, 17",
        value: 1,
      },
      {
        date: "03, 15",
        value: 2,
      },
      {
        date: "08, 01",
        value: 1,
      },
      {
        date: "04, 24",
        value: 0,
      },
      {
        date: "04, 07",
        value: 2,
      },
      {
        date: "11, 14",
        value: 2,
      },
      {
        date: "07, 11",
        value: 1,
      },
      {
        date: "06, 21",
        value: 2,
      },
      {
        date: "07, 07",
        value: 2,
      },
      {
        date: "05, 26",
        value: 0,
      },
      {
        date: "12, 06",
        value: 0,
      },
      {
        date: "01, 02",
        value: 2,
      },
      {
        date: "01, 05",
        value: 2,
      },
      {
        date: "06, 19",
        value: 0,
      },
      {
        date: "04, 25",
        value: 0,
      },
      {
        date: "01, 17",
        value: 1,
      },
      {
        date: "05, 05",
        value: 0,
      },
      {
        date: "08, 15",
        value: 2,
      },
      {
        date: "01, 14",
        value: 0,
      },
      {
        date: "06, 11",
        value: 2,
      },
      {
        date: "09, 12",
        value: 0,
      },
      {
        date: "01, 04",
        value: 1,
      },
      {
        date: "05, 07",
        value: 2,
      },
      {
        date: "10, 13",
        value: 2,
      },
      {
        date: "07, 01",
        value: 2,
      },
      {
        date: "02, 14",
        value: 0,
      },
    ],
  },
  {
    firstname: "Ayn",
    lastname: "Kiyoshi",
    attendance: [
      {
        date: "07, 23",
        value: 0,
      },
      {
        date: "05, 13",
        value: 2,
      },
      {
        date: "11, 24",
        value: 0,
      },
      {
        date: "08, 15",
        value: 0,
      },
      {
        date: "12, 23",
        value: 2,
      },
      {
        date: "12, 29",
        value: 2,
      },
      {
        date: "07, 01",
        value: 0,
      },
      {
        date: "01, 23",
        value: 0,
      },
      {
        date: "08, 13",
        value: 1,
      },
      {
        date: "10, 21",
        value: 2,
      },
      {
        date: "12, 28",
        value: 0,
      },
      {
        date: "02, 14",
        value: 0,
      },
      {
        date: "09, 29",
        value: 1,
      },
      {
        date: "12, 09",
        value: 0,
      },
      {
        date: "07, 22",
        value: 0,
      },
      {
        date: "06, 21",
        value: 2,
      },
      {
        date: "06, 22",
        value: 1,
      },
      {
        date: "01, 25",
        value: 1,
      },
      {
        date: "06, 24",
        value: 2,
      },
      {
        date: "04, 12",
        value: 2,
      },
      {
        date: "05, 23",
        value: 0,
      },
      {
        date: "01, 28",
        value: 2,
      },
      {
        date: "12, 22",
        value: 0,
      },
      {
        date: "12, 06",
        value: 0,
      },
      {
        date: "05, 06",
        value: 1,
      },
      {
        date: "09, 10",
        value: 2,
      },
      {
        date: "07, 16",
        value: 0,
      },
      {
        date: "05, 26",
        value: 2,
      },
      {
        date: "02, 18",
        value: 2,
      },
      {
        date: "09, 21",
        value: 1,
      },
    ],
  },
  {
    firstname: "Minda",
    lastname: "Egbert",
    attendance: [
      {
        date: "02, 19",
        value: 1,
      },
      {
        date: "04, 24",
        value: 1,
      },
      {
        date: "04, 12",
        value: 2,
      },
      {
        date: "05, 11",
        value: 0,
      },
      {
        date: "01, 20",
        value: 2,
      },
      {
        date: "04, 16",
        value: 2,
      },
      {
        date: "05, 11",
        value: 2,
      },
      {
        date: "06, 18",
        value: 1,
      },
      {
        date: "10, 27",
        value: 0,
      },
      {
        date: "07, 16",
        value: 2,
      },
      {
        date: "06, 22",
        value: 1,
      },
      {
        date: "09, 05",
        value: 1,
      },
      {
        date: "03, 14",
        value: 0,
      },
      {
        date: "02, 09",
        value: 1,
      },
      {
        date: "08, 31",
        value: 1,
      },
      {
        date: "10, 28",
        value: 2,
      },
      {
        date: "06, 26",
        value: 1,
      },
      {
        date: "03, 09",
        value: 2,
      },
      {
        date: "08, 17",
        value: 0,
      },
      {
        date: "08, 23",
        value: 1,
      },
      {
        date: "06, 27",
        value: 2,
      },
      {
        date: "11, 30",
        value: 0,
      },
      {
        date: "03, 06",
        value: 0,
      },
      {
        date: "03, 28",
        value: 2,
      },
      {
        date: "11, 29",
        value: 2,
      },
      {
        date: "03, 27",
        value: 2,
      },
      {
        date: "10, 16",
        value: 0,
      },
      {
        date: "12, 26",
        value: 2,
      },
      {
        date: "11, 24",
        value: 2,
      },
      {
        date: "12, 10",
        value: 2,
      },
    ],
  },
];

const sections = ["Ирц", "Гэрийн даалгавар", "Шалгалт", "Хувийн шалгалт"];

const ClassroomTable = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const scroll = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <Fullname />
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div
              onClick={() => {
                setSectionIndex(index);
              }}
              className={styles.section}
            >
              <p
                style={{
                  borderBottom:
                    sectionIndex === index
                      ? "2px solid #fbb532"
                      : "2px solid #fff",
                  color: sectionIndex === index ? "#fbb532" : "rgba(0,0,0,0.5)",
                }}
              >
                {section}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dates */}

      <div className={`w100 ${styles.header}`}>
        <div className={styles.fullname} />
        <div className={`${styles.datesContainer}`}>
          <div
            style={{ transform: `translateX(-${scrollLeft}px)` }}
            className={`${styles.dates}`}
          >
            {data[0].attendance.map((item) => (
              <div className={`${styles.recordCell}`}></div>
            ))}
          </div>
        </div>
        <div className={`${styles.dateEnd}`} />
      </div>

      {/* Table */}

      <div className={styles.tableContainer}>
        {/* Fullnames */}

        <div className={styles.fullnamesContainer}>
          <div className={styles.fullnames}>
            {data.map((item) => (
              <div className={`w100 ${styles.fullname}`}>{item.firstname}</div>
            ))}
          </div>
          <div className={styles.scrollPart}></div>
        </div>

        {/* Horizontal Scroll */}

        <div
          ref={scroll}
          onScroll={() => {
            if (scroll) {
              setScrollLeft(scroll.current.scrollLeft);
            }
          }}
          className={styles.record}
        >
          {data.map((item, index) => (
            <div className={`flex ${styles.recordRow}`}>
              {item.attendance.map((e) => (
                <div className={`${styles.recordCell}`}>
                  {/* <Status section={section} value={e.value} /> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomTable;
