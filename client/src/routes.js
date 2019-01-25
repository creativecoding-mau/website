import User from "./components/User/User.vue"
import About from "./components/About/About.vue"
import Projects from "./components/Projects/Projects.vue"


export const routes = [
    { path: "/", component: About },
    { path: "/profile", component: User },
    { path: "/projects", component: Projects },

];