import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTalentComponent } from './book-talent.component';

describe('BookTalentComponent', () => {
  let component: BookTalentComponent;
  let fixture: ComponentFixture<BookTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
