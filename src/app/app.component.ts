import { Title } from '@angular/platform-browser';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
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

  services: any = {
    async handleSignUp(formData: Record<string, any>) {
      const { username, password, attributes } = formData;
      attributes.picture = 'default-profile-picture.jpg';
      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    },
  };

  constructor(
    private titleService: Title,
    public authenticator: AuthenticatorService
  ) {
    Amplify.configure(awsExports);
    this.titleService.setTitle($localize`Portfolio`);
  }
}
