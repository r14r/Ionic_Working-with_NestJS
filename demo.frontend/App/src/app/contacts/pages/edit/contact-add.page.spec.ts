import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactAddPage } from './page';

describe('ContactAddPage', () => {
  let component: ContactAddPage;
  let fixture: ComponentFixture<ContactAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
