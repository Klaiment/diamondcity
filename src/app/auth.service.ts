import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000';
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(user: { email: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/session`, user).pipe(
      tap(response => {
        if (response && response.token) {
          this.setSession(response.token);
        }
      })
    );
  }

  public setSession(token: string): void {
    const decodedToken: any = this.jwtHelper.decodeToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', decodedToken.user_id);
    localStorage.setItem('email', decodedToken.email);
    // ... Ajoutez d'autres informations nécessaires
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('email');
    // ... Supprimez d'autres informations si nécessaire
  }
  estUtilisateurConnecte(): boolean {
    const token = localStorage.getItem('token');

    // Si le token est présent et n'est pas expiré, l'utilisateur est connecté
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }
}
