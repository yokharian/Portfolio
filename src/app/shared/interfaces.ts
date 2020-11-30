export interface Log {
  description: string;
  duration: number;
  date: string;
}
export interface UserFields {
  username: string;
  _id: string;
}
export interface AllUsersResponse {
  noName: UserFields[];
}

export interface NewUserResponse {
  username: string;
  _id: string;
  error: {
    text: string;
  };
}
export interface AddExerciseFormResponse {
  description: string;
  duration: number;
  date: string;
  _id: string;
  username: string;
}

export interface GetLogsResponse {
  _id: string;
  username: string;
  count: number;
  log: Log[];
}
