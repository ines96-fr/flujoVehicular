import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Interface } from 'readline';

export interface ISettingsTables {
  actions:Object,
  columns:Object
} 

@Injectable()

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})

export class SmartTableComponent implements ISettingsTables {


  @Input() settingsTable:ISettingsTables; 
  @Input() data:Array<Object>; 
  @Output() onEvent = new EventEmitter<Event>();

  source: LocalDataSource; 
  settings:ISettingsTables; 

  constructor(private service: SmartTableData) {
    
  }
  actions: Object;
  columns: Object;

  ngOnInit() {
    this.source = new LocalDataSource(this.data);
    this.settings = {
      ...this.settingsTable, 
      actions: {
        position:"right",
        columnTitle:"Acciones",
        class:"action-column",
        add: false,
        edit: false,
        delete: false,
        ...this.settingsTable.actions
      },
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCustomTable(e: Event) {
    this.onEvent.emit(e);
   }

  /*onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'nombre',
        search: query
      },
      {
        field: 'descripcion',
        search: query
      },
      {
        field: 'identificador',
        search: query
      },      
      {
        field: 'modulo',
        search: query
      },
      
    ], false);
  
  }*/
}
