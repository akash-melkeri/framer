import { EventBus } from "quasar";


export default async ({ app }) => {
  app.config.globalProperties.$eventBus = new EventBus();
}
