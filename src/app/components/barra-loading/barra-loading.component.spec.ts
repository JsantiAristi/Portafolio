import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLoadingComponent } from './barra-loading.component';

describe('BarraLoadingComponent', () => {
  let component: BarraLoadingComponent;
  let fixture: ComponentFixture<BarraLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraLoadingComponent]
    });
    fixture = TestBed.createComponent(BarraLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
