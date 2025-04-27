import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import Root from "./Root.vue";
import icons from "./icons";

import "./style.scss";

const routes = [{ path: "/", component: () => import("./views/Home.vue") }];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

library.add(...icons);

createApp(Root)
	.component("icon", FontAwesomeIcon)
	.component("icon-layers", FontAwesomeLayers)
	.component("icon-layers-text", FontAwesomeLayersText)
	.use(router)
	.mount("#root");
