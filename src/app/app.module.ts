import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from './currency.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {MatCardModule} from '@angular/material/card';
import { EmailValidator } from './edit-customer/my-form-definition';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormlyModule.forRoot({validators: [
      { name: 'Email', validation: EmailValidator },
    ]}),
    FormlyMaterialModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
