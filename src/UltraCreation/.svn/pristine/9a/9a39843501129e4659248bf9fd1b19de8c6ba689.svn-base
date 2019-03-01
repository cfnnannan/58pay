import * as Mqtt from 'mqtt';
import {Subject} from 'rxjs/Subject';
import {TypeInfo} from '../Core/TypeInfo';

/**
 *
 */
export interface IConfig
{
    Addr: string;
    UserName?: string;
    Password?: string;
}

/**
 *
 */
export class TMqttService
{
    constructor(public Config: IConfig)
    {
        this.Start();
    }

    Subscripbe(Topic: string, QoS: Mqtt.QoS = 0): TMqttSubscription
    {
        const sub = new TMqttSubscription();
        return sub;
    }

    Publish(Topic: string, Message: string | Uint8Array): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            this.Client.publish(Topic, Message as any, (err, packet) =>
            {
                if (TypeInfo.Assigned(err))
                    reject(err);
                else
                    resolve();
            });
        });
    }

    private Start()
    {
        try
        {
            if (TypeInfo.Assigned(this.Config.UserName))
            {
                this.Client = Mqtt.connect(this.Config.Addr, {
                    username: this.Config.UserName, password: this.Config.Password});
            }
            else
                this.Client = Mqtt.connect(this.Config.Addr);

            this.Client.on('connect', () =>
            {
                this.Connected = true;
                console.log('mqtt client connected.');
            });

            this.Client.on('offline', () =>
            {
                this.Connected = false;
                console.warn('Mqtt client offline.');
            });

            this.Client.on('error', err =>
            {
                this.Connected = false;
                console.error('Mqtt error: ' + err.message);
            });
        }
        catch (err)
        {
            console.error('Mqtt error: ' + err.message);
        }
    }

    private Client: Mqtt.Client;
    private Connected = false;
}

/**
 *  TMqttSubscription
 */
export class TMqttSubscription extends Subject<string>
{
    constructor()
    {
        super();
    }
}
