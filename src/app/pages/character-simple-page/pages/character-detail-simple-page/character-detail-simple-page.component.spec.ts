import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailSimplePageComponent } from './character-detail-simple-page.component';

describe('CharacterDetailSimplePageComponent', () => {
  let component: CharacterDetailSimplePageComponent;
  let fixture: ComponentFixture<CharacterDetailSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
