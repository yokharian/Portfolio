import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-noicefluid',
  templateUrl: './noicefluid.component.html',
  styleUrls: ['./noicefluid.component.sass'],
})
export class NoicefluidComponent implements AfterViewInit, OnDestroy {
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
  @ViewChild('DivMainPlayer') DivMainPlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    public authService: AuthenticatorService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

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

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1280px x 720px
    this.videoWidth = Math.min(
      this.DivMainPlayer.nativeElement.clientWidth,
      1280
    );
    this.videoHeight = this.videoWidth * 0.5625;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
