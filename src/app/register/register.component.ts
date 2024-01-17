import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  createUser() {
    this.http.post('http://localhost:3000/users', this.user)
      .subscribe(
        response => {
          console.log('Utilisateur créé avec succès', response);
          // Vous pouvez ajouter une logique supplémentaire ici, par exemple rediriger vers une autre page.
        },
        error => {
          console.error('Erreur lors de la création de l\'utilisateur', error);
          // Gérez les erreurs comme vous le souhaitez, par exemple afficher un message d'erreur à l'utilisateur.
        }
      );
  }
}
