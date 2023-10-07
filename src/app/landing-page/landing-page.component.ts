import { Component, HostListener } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
})
export class LandingPageComponent {
  authenticatorHidden = true;

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

  constructor(public authService: AuthenticatorService) {}

  get authenticated(): boolean {
    return this.authService.authStatus == 'authenticated';
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key.toLocaleLowerCase() == 'escape') {
      event.preventDefault();
      event.stopPropagation();
      this.toggleAuthenticator(true);
    }
  }

  public toggleAuthenticator(hide: boolean, signUp: boolean = false) {
    this.authenticatorHidden = hide;
    if (signUp) {
      this.authService.toSignUp();
    } else {
      this.authService.toSignIn();
    }
  }
}
