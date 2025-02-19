import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { DocumentWebsiteService } from '../src/services/documentwebsiteservice';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), DocumentWebsiteService]
})
  .catch(err => console.error(err));
