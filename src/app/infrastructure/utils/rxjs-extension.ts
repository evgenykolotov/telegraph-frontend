import { Store } from '@ngxs/store';
import { asapScheduler, catchError, map, Observable, of } from 'rxjs';

export function dispatchAsap<T>(store: Store, actionResolver: (value: T) => unknown[] | unknown) {
  return (source: Observable<T>) => source.pipe(
    map(value => asapScheduler.schedule(() => store.dispatch(actionResolver(value)))),
  );
}

export function dispatchErrorAsap<T>(store: Store, errorActionResolver: (error: any) => unknown[] | unknown) {
  return (source: Observable<T>) => source.pipe(
    catchError(error => {
      asapScheduler.schedule(() => store.dispatch(errorActionResolver(error)));

      return of(error);
    }),
  );
}
