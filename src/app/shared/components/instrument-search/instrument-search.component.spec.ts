import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentSearchComponent } from './instrument-search.component';

describe('InstrumentSearchComponent', () => {
  let component: InstrumentSearchComponent;
  let fixture: ComponentFixture<InstrumentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
