import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdmimComponent } from './admim/admim.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authGuard } from './_auth/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { NewsCatalogComponent } from './news-catalog/news-catalog.component';
import { CouponsCatalogComponent } from './coupons-catalog/coupons-catalog.component';
import { ShowProductToAdminComponent } from './show-product-to-admin/show-product-to-admin.component';
import { ShowNewsToAdminComponent } from './show-news-to-admin/show-news-to-admin.component';
import { ShowCouponsToAdminComponent } from './show-coupons-to-admin/show-coupons-to-admin.component';
import { UpdateProductDetailsComponent } from './update-product-details/update-product-details.component';
import { ProductViewsDetailsComponent } from './product-views-details/product-views-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ShownewstouserComponent } from './shownewstouser/shownewstouser.component';
import { ShowcouponstouserComponent } from './showcouponstouser/showcouponstouser.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateNewsDetailsComponent } from './update-news-details/update-news-details.component';
import { UpdateCouponsDetailComponent } from './update-coupons-detail/update-coupons-detail.component';
import { NewsViewsDeatilComponent } from './news-views-deatil/news-views-deatil.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderHistoryToAdminComponent } from './order-history-to-admin/order-history-to-admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  { path: 'product', component: HomeComponent },
  {
    path: 'admin',
    component: AdmimComponent,
    canActivate: [authGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard],
    data: { roles: ['User'] },
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path: 'addNewProduct', component: AddNewProductComponent, },
  {path: 'addNewNews', component: NewsCatalogComponent},
  {path: 'addNewCoupons', component: CouponsCatalogComponent},
  {path: 'showProductToAdmin', component: ShowProductToAdminComponent},
  {path: 'showNewsToAdmin', component: ShowNewsToAdminComponent},
  {path: 'showCouponsToAdmin', component: ShowCouponsToAdminComponent},
  {path: 'updateProductDetails/:id', component: UpdateProductDetailsComponent, canActivate: [authGuard],
  data: { roles: ['Admin'] }},
  {path:'updateCouponDetail/:id',component:UpdateCouponsDetailComponent},
  {path:'updateNewsDetails/:id',component:UpdateNewsDetailsComponent},
  {path:'productViewDetails',component:ProductViewsDetailsComponent},
  {path:'newsViewDetails',component:NewsViewsDeatilComponent},
  {path:'ShownewstouserComponent',component:ShownewstouserComponent},
  {path:'ShowcouponstouserComponent',component:ShowcouponstouserComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'PaymentComponent/:id',component:PaymentComponent},
  {path:'orderhistory',component:OrderHistoryComponent},
  {path:'orderhistorytoadmin',component:OrderHistoryToAdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
