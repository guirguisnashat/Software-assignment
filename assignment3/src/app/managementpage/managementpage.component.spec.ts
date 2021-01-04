import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementpageComponent } from './managementpage.component';

describe('ManagementpageComponent', () => {
  let component: ManagementpageComponent;
  let fixture: ComponentFixture<ManagementpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
