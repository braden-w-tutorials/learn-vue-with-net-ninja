import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Jobs from "../views/JobDetails/Jobs.vue"
import JobDetails from "../views/JobDetails/JobDetails.vue"
import NotFound from "../views/NotFound.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    // :id shows that it can be any value and will be bound
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // redirect from all-jobs to jobs
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catchall for 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
