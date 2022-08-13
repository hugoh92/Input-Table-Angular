import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {A11yModule} from '@angular/cdk/a11y';


export interface user {
  userName: string;
  age: string;
}

const ELEMENT_DATA: user [] =[];
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements AfterViewInit{

  public USER_DATA: user[] = [];
  public newUser = {userName: "", age: ""};
  public myDataArray: any;

   public dataSource = new  MatTableDataSource<user>;
   tableData = new MatTableDataSource();
    
   columnsToDisplay: string[] = ["cod","userName", "age","Remover" ];
    
  addUser() {
    const newUsersArray = this.USER_DATA;
    newUsersArray.push(this.newUser);
    this.myDataArray = [...newUsersArray];// refresh the datasource
    this.newUser = {userName:"", age: ""};
    console.warn(this.myDataArray);
  }
 
  constructor(private _liveAnnouncer: LiveAnnouncer) { 
  /* this.listData = []; */
  const users: user[] = [];
  userName: [
    '',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]
  ]

    this.myDataArray = new MatTableDataSource <user>([...this.USER_DATA]);
  }
  @ViewChild(MatSort) sort = new MatSort();
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  limpar(){
    this.newUser.userName = "";
    this.newUser.age = "";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.myDataArray.filter = filterValue.trim().toLowerCase();
  }

  onRemove(index: number){
    this.USER_DATA.splice(index,1);
    this.myDataArray = new MatTableDataSource(this.USER_DATA);
   }

   announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit(){
    this.dataSource.sort = this.sort;
  }

}
