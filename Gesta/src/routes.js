
import Dashboard from "views/Dashboard.js";
import Rtl from "views/Rtl.js";
import DemandeStage from "views/DemandeStage.js"
import Stage from "views/Stage";
import Stagiaires from "views/Stagiaires";
import Encadrant from "views/Encadrant";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Stagiaires",
    name: "LISTE DES STAGIAIRES",
    icon: "tim-icons icon-paper",
    component: Stagiaires,
    layout: "/admin",
  },
  {
    path: "/DemandeStage",
    name: "DEMANDE de stage",
    icon: "tim-icons icon-email-85",
    component: DemandeStage,
    layout: "/admin",
  },
  {
    path: "/Stage",
    name: "STAGE",
    icon: "tim-icons icon-heart-2",
    component: Stage,
    layout: "/admin",
  },
  {
    path: "/Encadrant",
    name: "Encadrant",
    icon: "tim-icons icon-single-02",
    component: Encadrant,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },
  
];
export default routes;
