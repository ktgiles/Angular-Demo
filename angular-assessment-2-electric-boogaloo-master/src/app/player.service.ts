import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(): Observable<Player[]>{
    return this.httpClient.get<Player[]>("http://localhost:3000/players");
  }

  addNewPlayer(player : Player): Observable<Player>{
    return this.httpClient.post<Player>("http://localhost:3000/players", player);
  }
}
