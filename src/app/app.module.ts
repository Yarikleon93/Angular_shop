import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { BasketComponent } from './components/basket/basket.component';
import { GoodsComponent } from './components/goods/goods.component';


import {MatSelectModule,MatInputModule,MatToolbarModule, MatFormFieldModule,MatIconModule,MatButtonModule,MatCardModule,MatBadgeModule,MatTableModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangepassComponent } from './components/changepass/changepass.component';
import { GoodItemComponent } from './components/good-item/good-item.component';
import { AuthGuard } from "src/app/auth/auth.guard";

const appRoutes = [
  {path: '', component:LoginComponent},
  {
    path: 'basket', 
    component:BasketComponent,
    canActivate: [AuthGuard]
  },
  {path: 'goods', component:GoodsComponent},
  {path: 'changepass', component:ChangepassComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    BasketComponent,
    GoodsComponent,
    ChangepassComponent,
    GoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatBadgeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
