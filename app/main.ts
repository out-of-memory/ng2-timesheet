import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {KVDatabase} from "./repository/KVDatabase"
bootstrap(AppComponent,[KVDatabase]);
