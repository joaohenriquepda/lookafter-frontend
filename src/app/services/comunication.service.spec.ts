import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ComunicationService } from './comunication.service';

describe('ComunicationService', () => {
  let service: ComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot()
      ], providers: [
        BsModalService, BsModalRef
      ]
    });
    service = TestBed.inject(ComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
