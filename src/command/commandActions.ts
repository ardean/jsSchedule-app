import { Dispatch } from "redux";
import commandApi from "./commandApi";

export interface CommandShuttingDownAction {
  type: "COMMAND_SHUTTING_DOWN";
}
export interface CommandShuttedDownAction {
  type: "COMMAND_SHUTTED_DOWN";
}

export interface CommandRebootingAction {
  type: "COMMAND_REBOOTING";
}
export interface CommandRebootedAction {
  type: "COMMAND_REBOOTED";
}

export type CommandAction =
  CommandShuttingDownAction | CommandShuttedDownAction |
  CommandRebootingAction | CommandRebootedAction;

export const shutdown = () => async (dispatch: Dispatch<CommandAction>): Promise<CommandShuttedDownAction> => {
  dispatch({
    type: "COMMAND_SHUTTING_DOWN"
  });

  await commandApi.shutdown();

  return await dispatch({
    type: "COMMAND_SHUTTED_DOWN"
  });
};

export const reboot = () => async (dispatch: Dispatch<CommandAction>): Promise<CommandRebootedAction> => {
  dispatch({
    type: "COMMAND_REBOOTING"
  });

  await commandApi.reboot();

  return await dispatch({
    type: "COMMAND_REBOOTED"
  });
};