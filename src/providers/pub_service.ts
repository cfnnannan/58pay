import { Http, Headers, RequestOptions } from '@angular/http';
import { Md5 } from "ts-md5/dist/md5";
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';

const API_URL = 'http://39.104.57.129';

export class TBaseService
{
  constructor(public http: Http)
  {

  }

  get CreateHeader()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let token = localStorage.getItem('token');
    if (TypeInfo.Assigned(token))
    {
      headers.append('Authorization','Bearer ' + token);
    }
    return new RequestOptions({headers: headers});
  }

  Md5T(Password: string)
  {
    return Md5.hashStr(Password.toString());
  }


  /**
   * DONE: json对象转成uri, 数据传输时，都以JSON,转成key1=value1&key2=value格式
   */
  JSON2URI(data: any)
  {
    let result = [];

    for (let key in data)
    {
      result.push(key + '=' + data[key]);
    }

    return result.join('&');
  }


  async Get(uri: string)
  {
    let url = API_URL + '/' + uri;
    return await this.http.get(url, this.CreateHeader).toPromise();
  }

  async Post(Uri: string, Data?: any)
  {
    App.ShowLoading();
    let url = API_URL + '/' + Uri + (TypeInfo.Assigned(Data) ? this.JSON2URI(Data) : '');
    App.HideLoading();
    return await this.http.post(url, '', this.CreateHeader).toPromise();
  }

}
