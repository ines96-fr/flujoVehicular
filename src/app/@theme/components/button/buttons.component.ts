import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Output() buttonClick = new EventEmitter<Event>();


  ngOnInit() {}

  onClickButton(e: Event) {
    console.log("sdsd")
   this.buttonClick.emit(e);
  }

}
