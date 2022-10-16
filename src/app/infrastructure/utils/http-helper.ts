import { HttpParams } from '@angular/common/http';

type BuildHttpPArams = Record<string, string | number | boolean | undefined>;

export class HttpHelper {
  public static combineUrlFragments(...paths: string[]): string {
    const rawUrl = paths.join('/');
    const urlFragments = rawUrl.split('/').filter(fragment => Boolean(fragment));
    return `/${ urlFragments.join('/') }/`;
  }

  public static buildHttpParams<T extends BuildHttpPArams>(obj: T): HttpParams {
    const paramsResult = Object.keys(obj)
      .map<[string, string | number | boolean | undefined]>(key => ([key, obj[key]]))
      .filter(([_, value]) => value !== undefined)
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key]: value }), {});
    return new HttpParams({ fromObject: paramsResult });
  }
}
