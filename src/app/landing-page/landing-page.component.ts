import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
})
export class LandingPageComponent {
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

  hideAuthenticator(event: Event | undefined = undefined) {
    if (event instanceof Event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.authenticatorHidden = true;
  }

  showAuthenticator(signUp: boolean = false) {
    this.authenticatorHidden = false;
    if (signUp) {
      this.authService.toSignUp();
    } else {
      this.authService.toSignIn();
    }
  }
}
