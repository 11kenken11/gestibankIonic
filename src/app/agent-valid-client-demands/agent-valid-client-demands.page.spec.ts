import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentValidClientDemandsPage } from './agent-valid-client-demands.page';

describe('AgentValidClientDemandsPage', () => {
  let component: AgentValidClientDemandsPage;
  let fixture: ComponentFixture<AgentValidClientDemandsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentValidClientDemandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentValidClientDemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
