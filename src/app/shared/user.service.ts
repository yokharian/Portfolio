import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GetLogsResponse,
  NewUserResponse,
  AddExerciseFormResponse,
} from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL: string;
  constructor(private _HTTP: HttpClient) {
    this.API_URL =
      'https://microproyecto.netlify.app/.netlify/functions/exercise';
  }

  Register(username: string): Observable<NewUserResponse> {
    return this._HTTP.post<NewUserResponse>(
      `${this.API_URL}/api/exercise/new-user`,
      { username },
    );
  }

  AddExercise(
    userId: string,
    description: string,
    duration: number,
    date = '',
  ): Observable<AddExerciseFormResponse> {
    console.log(arguments);
    return this._HTTP.post<AddExerciseFormResponse>(
      `${this.API_URL}/api/exercise/add`,
      { userId, description, duration, date: date.toString() },
    );
  }

  GetLogs(
    userId: string,
    from = '',
    to = '',
    limit = -1,
  ): Observable<GetLogsResponse> {
    const argsAsKeyAndValue: {
      userId: string;
      from: string;
      to: string;
      limit: string;
    } = Object.fromEntries(
      Object.entries({ userId, from, to, limit })
        .filter(v => v[1])
        .map(v => v.concat([v[0], v[1].toString()]), []),
    );

    const finalQuery = new HttpParams({ fromObject: argsAsKeyAndValue });
    return this._HTTP.get<GetLogsResponse>(`${this.API_URL}/api/exercise/log`, {
      params: finalQuery,
    });
  }
}
