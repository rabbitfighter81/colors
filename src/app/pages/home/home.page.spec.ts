import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { LoadingController } from '@ionic/angular'
import { StoreModule } from '@ngrx/store'
import { ColorService } from './../../core/services/color.service'
import { StateModule } from './../../state/state.module'
import { HomePage } from './home.page'

describe('HomePage', () => {
  let component: HomePage
  let fixture: ComponentFixture<HomePage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule, StateModule, HttpClientModule],
      declarations: [HomePage],
      providers: [ColorService, LoadingController],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
