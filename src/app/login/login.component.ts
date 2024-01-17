import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private http: HttpClient,private router: Router) {}

  createSession() {
    this.http.post('http://localhost:3000/session', this.user)
      .subscribe(
        (response: any) => {
          // Si le serveur renvoie un code de réponse 200 et success est true
          if (response && response.token) {
            console.log('Utilisateur connecté avec succès', response);

            // Enregistrez le token dans le stockage local en utilisant le service AuthService
            this.authService.setSession(response.token);
            this.router.navigate(["/"])
            // Ajoutez ici votre logique pour gérer la session, par exemple, rediriger vers une autre page.

          } else {
            console.error('Erreur lors de la connexion de l\'utilisateur. Réponse du serveur :', response);
          }
        },
        error => {
          console.error('Erreur lors de la connexion de l\'utilisateur', error);
          // Gérez les erreurs comme vous le souhaitez, par exemple, afficher un message d'erreur à l'utilisateur.
        }
      );
  }
}
