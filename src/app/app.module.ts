import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente.component';
import { MeuComponente2Component } from './meu-componente2/meu-componente2.component';
import { AlunosService } from './services/alunos.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MeuComponente2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlunosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
