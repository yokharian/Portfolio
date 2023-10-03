import { Component, ViewChild } from '@angular/core';
import {
  AmplifyAuthenticatorModule,
  AuthenticatorService,
} from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  @ViewChild('amplifyAuthenticatorComponent')
  amplifyAuthenticatorComponent?: AmplifyAuthenticatorModule;

  // noinspection JSUnusedGlobalSymbols
  services = {
    async validateCustomSignUp(formData: Record<string, string>) {
      if (!formData['gender']) {
        return {
          gender: 'You must choose a gender',
        };
      }
      return;
    },
  };

  authenticatorHidden = true;

  constructor(public authService: AuthenticatorService) {}

  get authenticated(): boolean {
    return this.authService.authStatus == 'authenticated';
  }

  setAuthenticatorHidden(event: MouseEvent | Event, hidden: boolean) {
    this.authenticatorHidden = hidden;
    if (event instanceof Event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
