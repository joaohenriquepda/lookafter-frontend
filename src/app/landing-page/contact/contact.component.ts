import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ComunicationService } from '../../services/comunication.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactSuccess', { static: false }) contactSuccess: TemplateRef<any>;
  @ViewChild('contactError', { static: false }) contactError: TemplateRef<any>;

  contactForm: FormGroup;
  modalRef: BsModalRef;


  constructor(
    private fb: FormBuilder,
    private comunicationService: ComunicationService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  // Open Modal - parameter 'modal' 
  open(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  registerContact() {
    this.comunicationService.registerContact(this.contactForm.value).subscribe(
      success => {
        this.open(this.contactSuccess);
      },
      error => {
        this.open(this.contactError)
      }
    )
  }

  createForm() {
    this.contactForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required,])),
      title: new FormControl('', Validators.compose([Validators.required,])),
      description: new FormControl('', Validators.compose([Validators.required,])),
    });
  }

}
