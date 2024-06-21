import { configureStore } from "@reduxjs/toolkit";
import Lang from "./Lang.js";
import Menu from "./dropMenu.js";
import instituations from "./instituations.js";
import conferences from "./conferences.js";
import projects from "./projects.js";

const store = configureStore({
  reducer: {
    Lang,
    Menu,
    instituations,
    conferences,
    projects,
  },
});

export default store;
