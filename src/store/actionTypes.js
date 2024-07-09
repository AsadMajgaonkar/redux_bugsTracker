import { createAction } from "@reduxjs/toolkit";

export const apiCall = createAction("apiCall");
export const bugRecieved = createAction("bugRecieved");
export const apiCallReject = createAction("apiCallRejected");