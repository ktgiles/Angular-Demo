import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  players: Player[] = [];
  player : Player = new Player();
  errorMessage : string = "";

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe({
      next:(players)=>{
        this.players = players;
      }
    })
  }

  add(){
    if (this.player.id != 0 && this.player.name != "" && this.player.country != "" && this.player.matches != 0){
      
      this.playerService.addNewPlayer(this.player).subscribe({
        next:(player)=>{
          console.log(player);
        this.players.push(player);
        this.errorMessage = "";
      },
      error:(errorResponse)=>{
        this.errorMessage = "Cannot add another player with that ID."
      }
    });
    } else {
      this.errorMessage = "Fields cannot be zero or empty";
    }
  }
}
