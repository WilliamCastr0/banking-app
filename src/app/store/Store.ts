import { BehaviorSubject, Observable } from 'rxjs';

export default class Store<T> {
  readonly state$: Observable<T>;
  private subject$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.subject$ = new BehaviorSubject<T>(initialState);
    this.state$ = this.subject$.asObservable();
  }

  protected getState(): T {
    return this.subject$.getValue();
  }

  protected setState(nextState: T): void {
    this.subject$.next(nextState);
  }
}
