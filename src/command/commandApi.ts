import BaseApi from "../BaseApi";

class CommandApi extends BaseApi {
  async shutdown() {
    return await this.call(`/shutdown`, "post");
  }

  async reboot() {
    return await this.call(`/reboot`, "post");
  }
}

export default new CommandApi();