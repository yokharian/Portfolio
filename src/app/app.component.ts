import {Title} from '@angular/platform-browser';
import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {Auth} from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild("main") main: ElementRef | undefined;
  @ViewChild("footer") footer: ElementRef | undefined;
  constructor(private titleService: Title,public authenticator: AuthenticatorService) {
    this.titleService.setTitle($localize`Portfolio`);
  }


  services = {
    async handleSignUp(formData: Record<string, any>) {
      // eslint-disable-next-line prefer-const
      let { username, password, attributes } = formData;
      console.log(attributes)
      // custom username
      // username = username.toLowerCase();
      // attributes.email = attributes.email.toLowerCase();
      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    }
  }
}
