import io from 'socket.io-client';
import { AppConfig } from 'common/config/app_config';

const Socket = io(AppConfig.host());

export { Socket };
