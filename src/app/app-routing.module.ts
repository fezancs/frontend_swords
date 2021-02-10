import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ClientauthGuard } from './clientauth/clientauth.guard';
const routes: Routes = [{ path: 'checkoutpage', loadChildren: () => import('./checkoutpage/checkoutpage.module').then(m => m.CheckoutpageModule) },
 { path: 'placeorderpage', loadChildren: () => import('./placeorderpage/placeorderpage.module').then(m => m.PlaceorderpageModule) },
 { path: 'aboutpage', loadChildren: () => import('./aboutpage/aboutpage.module').then(m => m.AboutpageModule) },
 { path: 'productdetailspage/:sku', loadChildren: () => import('./productdetailspage/productdetailspage.module').then(m => m.ProductdetailspageModule) }, 
 { path: 'shoppage', loadChildren: () => import('./shoppage/shoppage.module').then(m => m.ShoppageModule) },
 { path: 'shoppage/:category', loadChildren: () => import('./shoppage/shoppage.module').then(m => m.ShoppageModule) },
 { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
 { path: 'cartpage', loadChildren: () => import('./cartpage/cartpage.module').then(m => m.CartpageModule) },
 { path: 'clientauth', loadChildren: () => import('./clientauth/clientauth.module').then(m => m.ClientauthModule) },
 { path: 'clientdashboard', loadChildren: () => import('./clientdashboard/clientdashboard.module').then(m => m.ClientdashboardModule) ,canLoad:[ClientauthGuard] },
 { path: 'viewblog', loadChildren: () => import('./viewblog/viewblog.module').then(m => m.ViewblogModule) },
 { path: 'wishlistpage', loadChildren: () => import('./wishlistpage/wishlistpage.module').then(m => m.WishlistpageModule) },
 { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
