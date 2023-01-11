import { Body, Controller, Get /* Inject */ } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    // @Inject('MQTT_SERVICE') private client: ClientProxy,
    private readonly appService: AppService,
  ) {}
  @Get('notifications')
  getNotif(@Body() body: any) {
    return this.appService.getNotifications(body);
  }
  // getNotifications() {

  // return this.client.send(
  //   'notification_channel',
  //   "It's a Message From Client",
  // );
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
