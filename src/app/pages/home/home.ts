import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NgIf,RouterModule]
})
export class Home {

  user: any = null;
  errorMessage = '';


  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    const id = Number(localStorage.getItem('userId'));


    this.AuthService.home(id).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.user = res.user;

        } else {
          this.errorMessage = 'Failed to load user';
        }
      },
      error: (err) => {
        this.errorMessage = 'API error';
      }
    });



  }
}
