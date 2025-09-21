import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';

export const routes: Routes = [

    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow',
        component: ControlFlow,
    },
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'signalex',
        component: SignalEx
    }, 
    {
        path: 'att-directive'
        , component: AttDirective
    }

];
