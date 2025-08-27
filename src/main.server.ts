import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, { // ✅ Ensure MainLayoutComponent is bootstrapped
    providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideServerRendering() // ✅ Enables Server-Side Rendering (SSR)
    ]
  }).catch(err => console.error(err));
}
