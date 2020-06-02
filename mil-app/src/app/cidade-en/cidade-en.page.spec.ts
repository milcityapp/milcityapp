import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeEnPage } from './cidade-en.page';

describe('CidadeEnPage', () => {
  let component: CidadeEnPage;
  let fixture: ComponentFixture<CidadeEnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeEnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
