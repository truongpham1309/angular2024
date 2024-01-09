import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsAddComponent } from './admin-products-add.component';

describe('AdminProductsAddComponent', () => {
  let component: AdminProductsAddComponent;
  let fixture: ComponentFixture<AdminProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
