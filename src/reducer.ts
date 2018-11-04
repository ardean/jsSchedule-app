import { Reducer } from "redux";
import Schedule from "./schedule/Schedule";
import { ScheduleAction } from "./schedule/actions";

export interface AppState {
  schedules: Schedule[];
  loadingSchedules: boolean;
}

const initialState = {
  schedules: [],
  loadingSchedules: false
};

type Action = ScheduleAction;

const reducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case "SCHEDULES_LOADING":
      return {
        ...state,
        loadingSchedules: true
      };

    case "SCHEDULES_LOAD":
      return {
        ...state,
        schedules: action.schedules,
        loadingSchedules: false
      };

    case "SCHEDULES_CREATE":
      return {
        ...state,
        schedules: [
          ...state.schedules,
          action.schedule
        ]
      };

    case "SCHEDULES_UPDATE":
      return {
        ...state,
        schedules: [
          ...state.schedules.filter(x => x._id !== action.schedule._id),
          action.schedule
        ]
      };

    case "SCHEDULES_REMOVE":
      return {
        ...state,
        schedules: [
          ...state.schedules.filter(x => x._id !== action.scheduleId)
        ]
      };

    default:
      return state;
  }
};

export default reducer;