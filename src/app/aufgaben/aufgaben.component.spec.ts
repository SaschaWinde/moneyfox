import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenComponent } from './aufgaben.component';

describe('AufgabenComponent', () => {
  let component: AufgabenComponent;
  let fixture: ComponentFixture<AufgabenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AufgabenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AufgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
