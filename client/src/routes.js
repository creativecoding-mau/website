import User from "./components/User/User.vue"
import About from "./components/About/About.vue"
import Projects from "./components/Projects/Projects.vue"
import UserList from "./components/User/UserList.vue"


export const routes = [
    { path: "/", component: About },
    { path: "/profile", component: User },
    { path: "/projects", component: Projects },
    { path: "/members", component: UserList },
];