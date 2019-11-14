import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PrivateComponent } from "./components/private/private.component";
import { AuthGuard } from './services/auth.guard';
import { CallbackComponent } from './components/callback/callback.component';

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "private", component: PrivateComponent, canActivate: [AuthGuard] },
  { path: "callback", component: CallbackComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
