/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookstoreAppComponent } from './bookstore-app.component';

describe('BookstoreAppComponent', () => {
  let component: BookstoreAppComponent;
  let fixture: ComponentFixture<BookstoreAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
