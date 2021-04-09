import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchingComponent } from './product-searching.component';

describe('ProductSearchingComponent', () => {
  let component: ProductSearchingComponent;
  let fixture: ComponentFixture<ProductSearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
