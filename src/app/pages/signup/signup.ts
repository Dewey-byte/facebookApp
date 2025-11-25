import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
fullName = '';
email = '';
username = '';
password = '';
contactNumber = '';
address = '';


  constructor(private AuthService: AuthService, private router: Router) {}

  onSubmit() {
    const userData = {
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
      contactNumber: this.contactNumber,
      address: this.address
    };

    this.AuthService.signup(userData).subscribe({
      next: (response) => {
        console.log('',response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('',error);
      }
    });
  }
}
