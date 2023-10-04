import { Component, Input, OnInit } from '@angular/core';
import { APIService, User } from './../../API.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass'],
})
export class ChatComponent implements OnInit {
  @Input() user!: User;
  messages: any[] = [];
  services: any = {};

  constructor(private api: APIService, public titleService: Title) {
    this.services['validateCustomSignUp'] = this.validateCustomSignUp;
  }

  async validateCustomSignUp(formData: Record<string, string>) {
    if (!formData['gender']) {
      return {
        acknowledgement: `You must choose a gender`,
      };
    }
    return null;
  }

  ngOnInit(): void {
    this.listMessages();
    this.onCreateMessage();
  }

  send(event: any, inputElement: HTMLInputElement): void {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
    const input = {
      channelID: '2',
      // author: this.user.nickname.trim(),
      author: 'yokharian',
      body: inputElement.value.trim(),
    };
    this.messages.push(input);
    // this.api.CreateMessage(input).then((val) => {
    //   console.log('Send Message Success =>', val);
    //   inputElement.value = '';
    // });
  }

  private listMessages(): void {
    // this.api.MessagesByChannelId('2').then((val) => {
    //   console.log(val);
    //   this.messages = val.items;
    // });
  }

  private onCreateMessage(): void {
    // this.api.OnCreateMessageListener.subscribe({
    //   next: (val: any) => {
    //     console.log(val);
    //     this.messages.push(val.value.data.onCreateMessage);
    //   },
    // });
  }
}
