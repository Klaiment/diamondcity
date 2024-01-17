import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  estUtilisateurConnecte(): boolean {
    return this.authService.estUtilisateurConnecte();
  }

  deconnexion(): void {
    this.authService.logout();
    // Ajoutez ici la logique supplémentaire après la déconnexion si nécessaire
  }
}
