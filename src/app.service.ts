import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MQTT_SERVICE') private client: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }

  getNotifications(body) {
    console.log(
      '🚀 ~ file: app.service.ts:12 ~ AppService ~ getNotifications ~ body',
      body.test,
    );
    let channel = '';
    let message = '';
    switch (body.test) {
      case 'chanel1':
        channel = 'notification_channel_a';
        message = "It's a Message From Client with channel a";
        break;
      case 'chanel2':
        channel = 'notification_channel_b';
        message = "It's a Message From Client with channel b";
        break;
    }
    return this.client.send(channel, message);
  }
}
