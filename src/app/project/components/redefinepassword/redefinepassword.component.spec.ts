import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinepasswordComponent } from './redefinepassword.component';

describe('RedefinepasswordComponent', () => {
  let component: RedefinepasswordComponent;
  let fixture: ComponentFixture<RedefinepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedefinepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
