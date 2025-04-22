"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const scripts_index = require("./scripts/index.js");
const stores_index = require("./stores/index.js");
const uni_modules_vkUviewUi_index = require("./uni_modules/vk-uview-ui/index.js");
if (!Math) {
  "./pages/home.js";
  "./pages/time.js";
}
const _sfc_main = {
  onShow: function(options) {
    const updateManager = common_vendor.index.getUpdateManager();
    updateManager.onUpdateReady(function(res) {
      common_vendor.index.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success(res2) {
          if (res2.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
  },
  onHide: function() {
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(uni_modules_vkUviewUi_index.uView);
  app.use(common_vendor.createPinia());
  app.config.globalProperties.$scripts = scripts_index.modules;
  app.config.globalProperties.$stores = stores_index.modules;
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
