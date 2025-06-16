import { AAAAAAAAAType } from '../models/MovieAppData/aaaaaaaaatype';
import { MyNameType } from '../models/MovieAppData/my-name-type';
import { Test2Type } from '../models/MovieAppData/test2-type';
import { Test4Type } from '../models/MovieAppData/test4-type';
import { Test5Type } from '../models/MovieAppData/test5-type';
import { Test6Type } from '../models/MovieAppData/test6-type';
import { FetchApi } from './fetch-api-service';

class MovieAppDataService {
  public getTest6List = async (): Promise<Test6Type[]> => {
    return await FetchApi.fetchApiResponse<Test6Type[]>('https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2', []);
  }

  public getMyNameList = async (): Promise<MyNameType[]> => {
    return await FetchApi.fetchApiResponse<MyNameType[]>('https://excel2json.io/api/share/99cd7568-0b49-4c09-4387-08da496bf5f2', []);
  }

  public getTest4List = async (): Promise<Test4Type[]> => {
    return await FetchApi.fetchApiResponse<Test4Type[]>('https://excel2json.io/api/share/5435e256-3846-4895-4385-08da496bf5f2', []);
  }

  public getTest2List = async (): Promise<Test2Type[]> => {
    return await FetchApi.fetchApiResponse<Test2Type[]>('https://excel2json.io/api/share/f179620a-3bb6-49cd-4384-08da496bf5f2', []);
  }

  public getTest5List = async (): Promise<Test5Type[]> => {
    return await FetchApi.fetchApiResponse<Test5Type[]>('https://excel2json.io/api/share/49f543dc-9c4e-43e8-4386-08da496bf5f2', []);
  }

  public getAAAAAAAAAList = async (): Promise<AAAAAAAAAType[]> => {
    return await FetchApi.fetchApiResponse<AAAAAAAAAType[]>('https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2', []);
  }
}
export const movieAppDataService: MovieAppDataService = new MovieAppDataService();
