import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoNavComponent } from './icono-nav.component';

describe('IconoNavComponent', () => {
  let component: IconoNavComponent;
  let fixture: ComponentFixture<IconoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconoNavComponent]
    });
    fixture = TestBed.createComponent(IconoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
