import { createContext } from "react";

const data = [
  {
    projectId: "project2",
    projectName: "R-032/kumonos/systory",
    tasks: [
      {
        id: "1",
        imageUrl: "media/avatars/blank.png",
        label: "Task 1 for Project R-32",
        date: "02/20",
        category: "A-category",
        status: "done"
      },
      {
        id: "2",
        imageUrl: "media/avatars/blank.png",
        label: "Task 1 for Project R-32",
        date: "02/20",
        category: "A-category",
        status: "ongoing"
      },
      {
        id: "3",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "ongoing"
      },
      {
        id: "4",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "ongoing"
      },
      {
        id: "5",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "done"
      },
      // Add more tasks as needed
    ]
  },
  {
    projectId: "project2",
    projectName: "R-033/kumonos/systory",
    tasks: [
      {
        id: "1",
        imageUrl: "media/avatars/blank.png",
        label: "Task 1 for Project R-32",
        date: "02/20",
        category: "A-category",
        status: "done"
      },

      {
        id: "3",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "done"
      },
      {
        id: "4",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "ongoing"
      },
      {
        id: "5",
        imageUrl: "media/avatars/blank.png",
        label: "Task 2 for Project R-32",
        date: "02/21",
        category: "B-category",
        status: "done"
      },
      // Add more tasks as needed
    ]
  }
 
];

const DataContext = createContext(data)

export default DataContext