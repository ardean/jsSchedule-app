import { Dispatch } from "redux";
import api from "./api";
import Schedule from "./Schedule";

export interface ScheduleLoadingAction {
  type: "SCHEDULES_LOADING";
}
export interface ScheduleLoadAction {
  type: "SCHEDULES_LOAD";
  schedules: Schedule[];
}

export interface ScheduleCreatingAction {
  type: "SCHEDULES_CREATING";
  schedule: Schedule;
}
export interface ScheduleCreateAction {
  type: "SCHEDULES_CREATE";
  schedule: Schedule;
}

export interface ScheduleUpdatingAction {
  type: "SCHEDULES_UPDATING";
  schedule: Schedule;
}
export interface ScheduleUpdateAction {
  type: "SCHEDULES_UPDATE";
  schedule: Schedule;
}

export interface ScheduleRemovingAction {
  type: "SCHEDULES_REMOVING";
  scheduleId: string;
}
export interface ScheduleRemoveAction {
  type: "SCHEDULES_REMOVE";
  scheduleId: string;
}

export type ScheduleAction =
  ScheduleLoadingAction | ScheduleLoadAction |
  ScheduleCreatingAction | ScheduleCreateAction |
  ScheduleUpdatingAction | ScheduleUpdateAction |
  ScheduleRemovingAction | ScheduleRemoveAction;

export const load = () => async (dispatch: Dispatch<ScheduleAction>): Promise<ScheduleLoadAction> => {
  dispatch({
    type: "SCHEDULES_LOADING"
  });

  const schedules = await api.load();

  return await dispatch({
    type: "SCHEDULES_LOAD",
    schedules
  });
};

export const create = (schedule: Schedule) => async (dispatch: Dispatch<ScheduleAction>): Promise<ScheduleCreateAction> => {
  dispatch({
    type: "SCHEDULES_CREATING",
    schedule
  });

  schedule = await api.create(schedule);

  return await dispatch({
    type: "SCHEDULES_CREATE",
    schedule
  });
};

export const update = (schedule: Schedule) => async (dispatch: Dispatch<ScheduleAction>): Promise<ScheduleUpdateAction> => {
  dispatch({
    type: "SCHEDULES_UPDATING",
    schedule
  });

  schedule = await api.update(schedule);

  return await dispatch({
    type: "SCHEDULES_UPDATE",
    schedule
  });
};

export const remove = (scheduleId: string) => async (dispatch: Dispatch<ScheduleAction>): Promise<ScheduleRemoveAction> => {
  dispatch({
    type: "SCHEDULES_REMOVING",
    scheduleId
  });

  await api.remove(scheduleId);

  return await dispatch({
    type: "SCHEDULES_REMOVE",
    scheduleId
  });
};