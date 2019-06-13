import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunWithCssComponent } from './fun-with-css.component';

describe('FunWithCssComponent', () => {
  let component: FunWithCssComponent;
  let fixture: ComponentFixture<FunWithCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunWithCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunWithCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
