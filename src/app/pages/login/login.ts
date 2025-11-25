import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';
  message: string | undefined;

  constructor(private auth:
    AuthService, private router:
    Router) {}

    onSubmit() {
      this.auth.login({ username: this.username, password: this.password })
        .subscribe({
          next: (res) => {
            this.message = res.message;
            if (res.status === 'success') {

              // Fix 1: Remove old IDs
              localStorage.removeItem('userId');

              // Fix 2: Store new ID as a STRING
              localStorage.setItem('userId', String(res.id));

              console.log("Stored ID:", res.id);

              this.router.navigate(['/home']);
            }
          },
          error: (err) => this.message = 'Error: ' + err.message
        });
    }
  }