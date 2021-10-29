import React, { useState, useRef, useMemo } from "react";
import styles from "../../styles/components/classroom/ClassroomTable.module.css";

import Attendance from "./attendance";
import Homework from "./homework";
import Dates from "./dates";
import Fullnames from "./fullnames";

import Fullname from "./fullname";
import Exam from "./exam";
import PersonalExam from "./personalExam";


const data = [
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
  {
    firstname: "Мөнхтүшиг",
    lastname: "Гансүх",
    attendances: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 2,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    homeworks: [
      {
        dateAt: "2021/10/29",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/01",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/03",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/05",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/07",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/09",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/11",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/13",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/15",
        attendance_student: {
          status: 1,
        },
      },
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 0,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 0,
        },
      },
    ],
    exams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 98,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
    personalExams: [
      {
        dateAt: "2021/11/17",
        attendance_student: {
          status: 90,
        },
      },
      {
        dateAt: "2021/11/19",
        attendance_student: {
          status: 87,
        },
      },
      {
        dateAt: "2021/11/21",
        attendance_student: {
          status: 68,
        },
      },
      {
        dateAt: "2021/11/23",
        attendance_student: {
          status: 75,
        },
      },
      {
        dateAt: "2021/11/25",
        attendance_student: {
          status: 40,
        },
      },
      {
        dateAt: "2021/11/27",
        attendance_student: {
          status: 56,
        },
      },
      {
        dateAt: "2021/11/29",
        attendance_student: {
          status: 87,
        },
      },
    ],
  },
];

const sections = ["Ирц", "Гэрийн даалгавар", "Шалгалт", "Хувийн шалгалт"];
const fields = ["attendances","homeworks","exams","personalExams"];

const ClassroomTable = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const scroll = useRef(null);

  const Cell = ({ value }) => {
    switch (sectionIndex) {
      case 0:
        return <Attendance value={value} />;
      case 1:
        return <Homework value={value} />;
      case 2:
        return <Exam value={value} />;
      case 3:
        return <PersonalExam value={value} />;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <Fullname />
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <div
              key={index}
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

      <div className={styles.header}>
        <div className={styles.fullname} />
        <div className={styles.datesContainer}>
          {scroll && <Dates scroll={scroll} data={data[0].[fields[sectionIndex]]} />}
        </div>
        <div className={styles.dateEnd} />
      </div>

      {/* Table */}

      <div className={styles.tableContainer}>
        {/* Fullnames */}

        <div className={styles.fullnamesContainer}>
          <div className={styles.fullnames}>
            {scroll && <Fullnames scroll={scroll} data={data} />}
          </div>
          <div className={styles.scrollPart} />
        </div>

        {/* Horizontal Scroll */}

        <div ref={scroll} className={styles.record}>
          {data.map((item) => (
            <div className={styles.recordRow}>
              {item.[fields[sectionIndex]].map((e, index) => (
                <div
                  style={{
                    borderLeft: index === 0 && "none",
                  }}
                  className={styles.recordCell}
                >
                  <Cell value={e.attendance_student.status} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.corner} />
    </div>
  );
};

export default ClassroomTable;
