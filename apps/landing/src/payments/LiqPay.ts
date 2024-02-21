'use strict';
import * as crypto from 'crypto';

export enum Action {
    PAY = 'pay',
    HOLD = 'hold',
    SUBSCRIBE = 'subscribe',
    PAY_DONATE = 'paydonate',
    AUTH = 'auth',
    LETTER_OF_CREDIT = 'letter_of_credit',
    SPLIT_RULES = 'split_rules',
}

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    UAH = 'UAH',
}

export enum Language {
    UA = 'uk',
    EN = 'en',
}

export class LiqPay {
    private readonly public_key: string;
    private readonly private_key: string;

    constructor(public_key: string, private_key: string) {
        this.public_key = public_key;
        this.private_key = private_key;
    }


    create(
        language: Language,
        amount: number = 100,
        currency: Currency,
        description: string = 'Stay with Ukraine donation',
        subscribe_date_start: string = "2016-03-31 00:00:00",

        action: string = 'subscribe',
        subscribe_periodicity: string = "month",
        order_id: string = '',
        version: number = 3,
    ): string {
        let params: any = {};
        params.language = language.toString();
        params.public_key = this.public_key;
        params.version = version;
        params.amount = amount;
        params.currency = currency.toString();
        params.description = description;
        params.action = action;
        params.order_id = order_id;
        params.subscribe_date_start = subscribe_date_start;
        params.subscribe_periodicity = subscribe_periodicity;

        const data: string = btoa(JSON.stringify(params));
        const signature: string = crypto.createHash('sha1').update(this.private_key + data + this.private_key).digest('base64'); // does
        const link = "https://www.liqpay.ua/api/" + version + "/checkout?data=" + data + "&signature=" + signature
        console.log(link);
        return link;
    }
}
