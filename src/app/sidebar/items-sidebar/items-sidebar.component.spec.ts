import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSidebarComponent } from './items-sidebar.component';

describe('ItemsSidebarComponent', () => {
  let component: ItemsSidebarComponent;
  let fixture: ComponentFixture<ItemsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
