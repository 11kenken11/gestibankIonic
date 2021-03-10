import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'client-dashboard/:email',
    loadChildren: () => import('./client-dashboard/client-dashboard.module').then( m => m.ClientDashboardPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'agent-dashboard/:matricule',
    loadChildren: () => import('./agent-dashboard/agent-dashboard.module').then( m => m.AgentDashboardPageModule)
  },
  {
    path: 'currency-converter',
    loadChildren: () => import('./currency-converter/currency-converter.module').then( m => m.CurrencyConverterPageModule)
  },
  {
    path: 'admin-dashboard/list-demands',
    loadChildren: () => import('./admin-list-demands/admin-list-demands.module').then( m => m.AdminListDemandsPageModule)
  },
  {
    path: 'admin-dashboard/list-agents',
    loadChildren: () => import('./admin-list-agents/admin-list-agents.module').then( m => m.AdminListAgentsPageModule)
  },
  {
    path: 'admin-dashboard/create-agent',
    loadChildren: () => import('./admin-create-agent/admin-create-agent.module').then( m => m.AdminCreateAgentPageModule)
  },
  {
    path: 'agent-dashboard/:matricule/valid-client-demands',
    loadChildren: () => import('./agent-valid-client-demands/agent-valid-client-demands.module').then( m => m.AgentValidClientDemandsPageModule)
  },
  {
    path: 'agent-dashboard/:matricule/valid-checks',
    loadChildren: () => import('./agent-valid-checks/agent-valid-checks.module').then( m => m.AgentValidChecksPageModule)
  },
  {
    path: 'agent-dashboard/:matricule/change-pwd',
    loadChildren: () => import('./agent-change-pwd/agent-change-pwd.module').then( m => m.AgentChangePwdPageModule)
  },
  {
    path: 'client-dashboard/:email/check-request',
    loadChildren: () => import('./client-check-request/client-check-request.module').then( m => m.ClientCheckRequestPageModule)
  },
  {
    path: 'client-dashboard/:email/history',
    loadChildren: () => import('./client-history/client-history.module').then( m => m.ClientHistoryPageModule)
  },
  {
    path: 'client-dashboard/:email/change-pwd',
    loadChildren: () => import('./client-change-pwd/client-change-pwd.module').then( m => m.ClientChangePwdPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
