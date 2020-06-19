import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAdminPanelComponent } from './video-admin-panel.component';

describe('VideoAdminPanelComponent', () => {
  let component: VideoAdminPanelComponent;
  let fixture: ComponentFixture<VideoAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
