export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed API, call. But since were doing an optimistic delete, we are
//hiding loading state. So this action action name deliberately omits the "_SUCCESS" suffix. If it had one, our apiCallsInProgress
//would be decreamented below zero, because we're not incrementing the number of apiCallsInProgress when the delete request begins

export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
