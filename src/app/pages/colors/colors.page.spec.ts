import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { LoadingController } from '@ionic/angular'
import { StoreModule } from '@ngrx/store'
import { ColorsPage } from './colors.page'

describe('ColorsPage', () => {
  let component: ColorsPage
  let fixture: ComponentFixture<ColorsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorsPage],
      providers: [LoadingController, StoreModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
