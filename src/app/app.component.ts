import { Title } from '@angular/platform-browser';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import awsExports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('main') main: ElementRef | undefined;
  @ViewChild('footer') footer: ElementRef | undefined;

  services: any = {};

  constructor(
    private titleService: Title,
    public authenticator: AuthenticatorService
  ) {
    Amplify.configure(awsExports);
    this.titleService.setTitle($localize`Portfolio`);
    this.services['validateCustomSignUp'] = this.validateCustomSignUp;
  }

  async validateCustomSignUp(formData: Record<string, string>) {
    if (!formData['gender']) {
      return {
        acknowledgement: 'You must choose a gender',
      };
    }
    return null;
  }
}
