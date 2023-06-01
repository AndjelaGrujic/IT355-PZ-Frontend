import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  }

  ngOnInit(): void { }
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('Username is required!');
      return;
    }

    //add user
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('SUCCESS');
      },
      (error) => {
        console.log(error);
        alert('ERROR');
      }
    );
  }
}
