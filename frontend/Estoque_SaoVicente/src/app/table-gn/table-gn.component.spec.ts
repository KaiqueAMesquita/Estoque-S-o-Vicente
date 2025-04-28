import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGnComponent } from './table-gn.component';

describe('TableGnComponent', () => {
  let component: TableGnComponent<any>;
  let fixture: ComponentFixture<TableGnComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
