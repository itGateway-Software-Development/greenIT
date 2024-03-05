import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({ slug: route.query.slug || null }),
  },
  {
    path: "/home/:slug",
    component: HomeView,
    props: true,
  },
  {
    path: "/services-solutions",
    name: "Serivces&Solutions",
    component: () => import("@/views/Services.vue"),
  },
  {
    path: "/services-solutions/:slug",
    name: "Serivce Detail",
    component: () => import("@/views/ServiceDetail.vue"),
    props: true,
  },
  {
    path: "/productsPage",
    name: "Product",
    component: () => import("@/views/ProductMainPage.vue"),
  },
  {
    path: "/products/:slug",
    name: "Products",
    component: () => import("@/views/Products.vue"),
    props: true,
  },
  {
    path: "/promotion",
    name: "Promotion",
    component: () => import("@/views/Promotion.vue"),
  },
  {
    path: "/about-us/:slug",
    name: "AboutUS",
    component: () => import("@/views/AboutUs.vue"),
    props: true,
  },
  {
    path: "/career",
    name: "Career",
    component: () => import("@/views/Career.vue"),
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    component: () => import("@/views/CaseStudy.vue"),
  },
  {
    path: "/comming",
    component: () => import("@/views/Coming.vue"),
  },
  {
    path: "/loading",
    component: () => import("@/components/Loading.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
