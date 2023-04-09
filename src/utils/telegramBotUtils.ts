import { TELEGRAM_BOT_API_SEND_MESSAGE_URL } from './consts';
import { transformDate } from 'contexts/helpers/gameOrder';
import { IGameSetInfo } from 'contexts/helpers/types';

export const sendMessageToReceiver = (data: IGameSetInfo) => {
    const orderInfo = `<b>NEW ORDER from user ${data.surname} ${
        data.name
    }</b>%0A%0A<b>Order info:</b>%0AGame set: ${
        data.gameSet
    }%0ADate: ${transformDate(data.date)}%0ATime: ${
        data.time
    }%0A%0A<b>Contact info:</b>%0AEmail: ${data.email}%0APhone number: ${
        data.phoneNumber
    }`;

    fetch(`${TELEGRAM_BOT_API_SEND_MESSAGE_URL}${orderInfo}`)
        .then((response) => console.log(response))
        .catch((response) => console.dir(response));
};
