import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { WelcomeComponent } from './welcome-component/welcome.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { OrderStatusComponent } from './order-component/order-status.component';
import { OrderSummaryComponent } from './order-component/order-summary.component';
import { OrderComponent } from './order-component/order.component';
import { AddProductComponent } from './product-component/add-product.component';
import { ViewProductComponent } from './product-component/view-product.component';
import { AuthGuard } from './authentication/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // ✅ Login is always accessible
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [ // ✅ Protect pages
    { path: 'welcome', component: WelcomeComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'view-product', component: ViewProductComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'order-status', component: OrderStatusComponent }
  ]}
];
