import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './auth.guard';
import { RankingComponent } from './components/ranking/ranking.component';
import { GenreComponent } from './components/genre/genre.component';
import { BookInfoComponent } from './components/book/bookInfo.component';
import { ChapComponent } from './components/book/chap.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'thao-luan',
        component: ReviewComponent 
    },
    {
        path: 'bang-xep-hang',
        component: RankingComponent 
    },
    {
        path: 'chuyen-muc/:slug',
        component: GenreComponent 
    },
    {
        path: 'sach/:slug',
        component: BookInfoComponent 
    },
    {
        path: 'sach/:slug/:chap',
        component: ChapComponent 
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);