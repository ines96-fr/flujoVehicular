import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';


@Component({
  selector: 'ngx-textarea',
  styleUrls: ['./textarea.component.scss'],
  templateUrl: './textarea.component.html',
})
export class TextAreaComponent implements OnInit {

  @Input() label: string;
  @Input() type: string;
  @Output() selectedOption = new EventEmitter<string>();


  ngOnInit() {}

  onChangeSelected(optionName: string) {
   this.selectedOption.emit(optionName);
  }

}
