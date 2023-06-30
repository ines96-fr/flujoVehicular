import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'ngx-input',
  styleUrls: ['./input.component.scss'],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() type: string;
  @Input() public form: FormGroup;
  @Input() ControlName: string;
  @Output() selectedOption = new EventEmitter<string>();


  ngOnInit() {}

  onChangeSelected(optionName: string) {
   this.selectedOption.emit(optionName);
  }

}
