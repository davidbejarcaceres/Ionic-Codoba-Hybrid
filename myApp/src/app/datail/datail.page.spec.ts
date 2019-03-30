import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailPage } from './datail.page';

describe('DatailPage', () => {
  let component: DatailPage;
  let fixture: ComponentFixture<DatailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
