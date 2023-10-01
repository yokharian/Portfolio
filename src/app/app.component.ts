import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  services: any = {};
  protectedUrls = ['/noicefluid'];

  constructor(public titleService: Title, private router: Router) {
    this.services['validateCustomSignUp'] = this.validateCustomSignUp;
  }

  isProtectedUrl() {
    return this.protectedUrls.every((s) => this.router.url.includes(s));
  }

  capitalize(str: string) {
    return str
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async validateCustomSignUp(formData: Record<string, string>) {
    if (!formData['gender']) {
      return {
        acknowledgement: `You must choose a gender`,
      };
    }
    return null;
  }
}
