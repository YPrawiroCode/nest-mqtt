import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('math')
export class MqttController {
  @MessagePattern('notification_channel_a')
  getNotificationsA(@Payload() data) {
    console.log(data);
    return `I Got Message From Client with channel a: ${data}`;
  }

  @MessagePattern('notification_channel_b')
  getNotificationsB(@Payload() data) {
    console.log(data);
    return `I Got Message From Client with channel b: ${data}`;
  }
}
