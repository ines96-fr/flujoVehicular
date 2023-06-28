import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';


@Component({
  selector: 'ngx-input',
  styleUrls: ['./input.component.scss'],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() type: string;
  @Output() selectedOption = new EventEmitter<string>();


  ngOnInit() {}

  onChangeSelected(optionName: string) {
   this.selectedOption.emit(optionName);
  }

}
