import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContaierComponent } from './main-contaier.component';

describe('MainContaierComponent', () => {
  let component: MainContaierComponent;
  let fixture: ComponentFixture<MainContaierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContaierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
