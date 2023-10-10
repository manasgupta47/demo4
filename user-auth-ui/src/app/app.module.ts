import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxCopyPasteDirective} from 'ngx-copypaste'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmimComponent } from './admim/admim.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { authGuard } from './_auth/auth.guard';
import { UserService } from './_services/user.service';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { NewsCatalogComponent } from './news-catalog/news-catalog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { CouponsCatalogComponent } from './coupons-catalog/coupons-catalog.component';
import { ShowProductToAdminComponent } from './show-product-to-admin/show-product-to-admin.component';
import {MatTableModule} from '@angular/material/table';
import { ShowNewsToAdminComponent } from './show-news-to-admin/show-news-to-admin.component';
import { ShowCouponsToAdminComponent } from './show-coupons-to-admin/show-coupons-to-admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowProductImageComponent } from './show-product-image/show-product-image.component';
import { ShowNewsImageComponent } from './show-news-image/show-news-image.component';
import { ShowCouponsImageComponent } from './show-coupons-image/show-coupons-image.component';
import { UpdateProductDetailsComponent } from './update-product-details/update-product-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductViewsDetailsComponent } from './product-views-details/product-views-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ShownewstouserComponent } from './shownewstouser/shownewstouser.component';
import { ShowcouponstouserComponent } from './showcouponstouser/showcouponstouser.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateNewsDetailsComponent } from './update-news-details/update-news-details.component';
import { UpdateCouponsDetailComponent } from './update-coupons-detail/update-coupons-detail.component';
import { NewsViewsDeatilComponent } from './news-views-deatil/news-views-deatil.component';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmimComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    SignupComponent,
    AddNewProductComponent,
    NewsCatalogComponent,
    CouponsCatalogComponent,
    ShowProductToAdminComponent,
    ShowNewsToAdminComponent,
    ShowCouponsToAdminComponent,
    ShowProductImageComponent,
    ShowNewsImageComponent,
    ShowCouponsImageComponent,
    UpdateProductDetailsComponent,
    ProductViewsDetailsComponent,
    UserCartComponent,
    ShownewstouserComponent,
    ShowcouponstouserComponent,
    PaymentComponent,
    UpdateNewsDetailsComponent,
    UpdateCouponsDetailComponent,
    NewsViewsDeatilComponent,

  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCopyPasteDirective,
    ReactiveFormsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [
    authGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
