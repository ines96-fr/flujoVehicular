import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';


import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-select',
  styleUrls: ['./select.component.scss'],
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {

  @Input() options: Array<Object>;
  @Input() label: string;
  @Input() selectedDefault: Array<Object>;
  @Input() public form: FormGroup;
  @Input() ControlName: string;
  @Output() selectedOption = new EventEmitter<string>();


  ngOnInit() {}

  onChangeSelected(optionName: string) {
   this.selectedOption.emit(optionName);
  }

}
