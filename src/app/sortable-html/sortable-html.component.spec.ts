import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableHtmlComponent } from './sortable-html.component';

describe('SortableHtmlComponent', () => {
  let component: SortableHtmlComponent;
  let fixture: ComponentFixture<SortableHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
