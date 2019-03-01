import {InvHttp, InvTokenContext, InvCookies} from './InvTypes';
import {TInvCookies} from './Internal';

/* TInvokableClass */

export class TInvokableClass
{
    constructor (public Headers: InvHttp.Headers)
    {
        this.Auth = Authorization.Get(Headers);
        this.Cookies = TInvCookies.Create(Headers);
    }

    Auth?: InvTokenContext;
    Cookies: InvCookies;
    Queries: InvHttp.Queries;
    Content: InvHttp.Content;
}
