import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  utilisateurConnecte: boolean = false;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    // Vérifier l'état de connexion lors de l'initialisation du composant
    this.utilisateurConnecte = this.authService.estUtilisateurConnecte();
  }

  estUtilisateurConnecte(): boolean {
    return this.authService.estUtilisateurConnecte();
  }

  deconnexion(): void {
    this.authService.logout();
    this.router.navigate(["/"])
    // Ajoutez ici la logique supplémentaire après la déconnexion si nécessaire
  }
}
