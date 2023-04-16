import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNavigationComponent } from './desktop-navigation.component';

describe('DesktopNavigationComponent', () => {
  let component: DesktopNavigationComponent;
  let fixture: ComponentFixture<DesktopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
