import BaseApi from "src/BaseApi";
import Schedule from "./Schedule";

class ScheduleApi extends BaseApi {
  async load() {
    return await this.call("/schedules", "get");
  }

  async create(schedule: Schedule) {
    return await this.call(`/schedules`, "post", schedule);
  }

  async update(schedule: Schedule) {
    return await this.call(`/schedules/${schedule._id}`, "put", schedule);
  }

  async remove(scheduleId: string) {
    return await this.call(`/schedules/${scheduleId}`, "delete");
  }
}

export default new ScheduleApi();