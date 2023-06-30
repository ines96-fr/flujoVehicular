import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbInputModule,
  NbTooltipModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';


import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
  SelectComponent,
  SmartTableComponent,


} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonsComponent } from './components/button/buttons.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/textArea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbUserModule,
  NbButtonModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  Ng2SmartTableModule,
  NbInputModule,
  NbTooltipModule,
  FormsModule,
  ReactiveFormsModule

];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  SelectComponent,
  InputComponent,
  ButtonsComponent,
  SmartTableComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  TextAreaComponent

];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
        ).providers,
      ],
    };
  }
}
