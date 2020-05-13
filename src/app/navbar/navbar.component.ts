import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef: BsModalRef;
  createUserForm: FormGroup;
  loginForm: FormGroup;
  recoveryForm: FormGroup;
  closeResult = '';
  isValidForm = false;
  errorInform = false;
  successInform = false;
  errorMessage = "";
  isCollapsed = true;
  navbarOpen = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthUserService,
    private router: Router,
    private modalService: BsModalService
  ) { }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  ngOnInit(): void {
    this.buildUserForm();
    this.buildLoginForm();
    this.buildRecoveryForm();
  }

  // Open Modal - parameter 'modal' 
  open(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  registerUser() {
    const user = {
      user: this.createUserForm.value
    }

    this.auth.registerUser(user).subscribe(
      success => {
        // Return success message and close modal
        this.successInform = !this.successInform;
        setTimeout(() => {
          this.successInform = !this.successInform;
          this.modalRef.hide();
        }, 6000);
      },
      error => {
        // Return error message and show alert
        this.errorMessage = error.error.email ? "Email already registered" : "An error has occurred"
        this.errorInform = !this.errorInform
        setTimeout(() => {
          this.errorInform = !this.errorInform
        }, 6000);
      }
    )
  }

  authUser() {
    this.auth.authUser(this.loginForm.value).subscribe(
      success => {
        // Save token in localstore
        console.log(success);
        localStorage.setItem('token-lookafter', JSON.stringify(success));
        this.router.navigate(['dashboard']);

      },
      error => {
        // Show error inform
        console.log(error);
        this.errorInform = !this.errorInform
        setTimeout(() => {
          this.errorInform = !this.errorInform
        }, 6000);
      }
    )
  }

  checkPassword(value) {
    if (this.createUserForm.value.password === this.createUserForm.value.password_confirmation) {
      this.isValidForm = true;
    } else {
      this.isValidForm = false;
    }
  }

  buildUserForm() {
    this.createUserForm = this.fb.group({
      fullname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required,])),
      password_confirmation: new FormControl('', Validators.compose([Validators.required,])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]{9}$"), Validators.maxLength(9)])),
    });
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required,])),
    });
  }

  buildRecoveryForm() {
    this.recoveryForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    });
  }

}
