/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustchatComponent } from './custchat.component';

describe('CustchatComponent', () => {
  let component: CustchatComponent;
  let fixture: ComponentFixture<CustchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
