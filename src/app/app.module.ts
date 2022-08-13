import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import { MatSortModule} from '@angular/material/sort';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {A11yModule} from '@angular/cdk/a11y';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatPaginatorModule,
    MatInputModule,
    A11yModule,
    BrowserAnimationsModule,
    MatIconModule
    
   

    
    
 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
