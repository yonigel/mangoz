import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlaygroundComponent } from './main-playground.component';

describe('MainPlaygroundComponent', () => {
  let component: MainPlaygroundComponent;
  let fixture: ComponentFixture<MainPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
