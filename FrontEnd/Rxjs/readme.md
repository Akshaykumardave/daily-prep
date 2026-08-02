### RxJS stands for Reactive Extensions for Javascript. it's a library that helps us handle asynchronous data in a clean, powerful and reactive way. it's a library used to manage asynchrohous data streams, handle user events and make code cleaner through Observables, operators and subscriptions.
### In RxJS the commonly used terms are like Streams, Observables, Observer, Subscription, Operators, Subject, Schedulers.

## 1. Streams: 
The sequence of ongoing events or data is considered as a stream as RxJS works only if the stream is flowing.
Streams are represented by Observables and **of()** is used to create an observable when known data.

#### Example
    // this is creating an observable.
        const fruitStream$ = of('Apple', 'Banana', 'Orange');

        fruitStream$.subscribe({
            next: fruit => console.log('Got fruits: ', fruit), // when we receive data 
            complete: () => console.log('No more fruits..!!'), // when it finishes
            error: err => console.error('Something went wrong:', err), // if error occurs
        });

        // output:
        Got fruits: Apple
        Got fruits: Banana
        Got fruits: Orange
        No more fruits..!!


## 2. Observables:
An observable is like a blueprint for a stream.
 * Think of it as:
    - A recipe tht defines how the data will be sent.
    - It does nothing until someone subscribe to it.
 * Observable is commonly used to create the observable stream when data or completion time is unknown.

 #### Example
    import {Observable} from 'rsjs';

    // Notice we are using "Observable()" here instead of "of()"
    const junkFoodStream$ = new Observable(observer => {
        observer.next('Pizza);
        observer.next('Pasta);
        observer.complete();
    });

    // this is subscribing to the observable
    junkFoodStream$.subscribe({
        next: food => console.log('Got food:', food), // when we receive data
        complete: () => console.log('No more JunkFood..!!'), // when it finishes
        error: err => console.error('Something went wrong:', err), // if error occurs
    });

    // output
    Got food: Pizza,
    Got food: Pasta,
    No more JunkFood..!! 


## 3. Observer:
An observer is the good guy who attentively listens to every class in first bench.

* Think of it as:
    - A listener or handler.
    - if we want to store the data-producing or Emitting logic in one variable then it is called as Observable and if we want to store the subcribing logic, handling Emitted values logic then it is called observer.

#### Example
    import {Observable} from 'rxjs';

    // 1. creating the observable (animal stream)
        const animalStream$ = new Observable(observer => {
            observer.next('Dog);
            observer.next('Cat);
            observer.next('Bear);
            observer.complete();
        });

    // 2. Define the observer (the guy listening to the animal stream)
    const animalObserver = {
        next: animal => console.log(' I got an animal:', animal),
        complete: () => console.log('No more animals..!!'),
        error: err => console.error('Something went wrong: ', err),
    }

    // 3. Subscribe the observer to teh observable
    animalStream$.subscribe(animalObserver);


## 4. Subscription:
A subscription is the connection between an Observable and an Observer.

* Think of it as:
    - Turning the pipe ON so the data can start flowing.
    - We can unsubscribe to turn the pipe OFF and stop listening.

#### Example
    import {interval} from 'rxjs'; // same as setInterval in JavaScript

    const timer$ = interval(1000); // Emits 0, 1, 2, 3, 4... every 1 second and goes on.

    // Subscribe to the stream - this starts the timer
    const subscription = timer$.subscribe(count => {
        console.log(`Tick: ${count}`);
    });

    // Automatically unsubscribe after 5 seconds
    setTimeout(() => {
        subcription.unsubscribe(); // Stops the stream
        console.log('Timer Stopped after 5 seconds');
    }, 5000);

    // there can be any logic to unsubscribe the stream

    // Output:
        Tick: 0
        Tick: 1
        Tick: 2
        Tick: 3
        Tick: 4
        Timer stopped after 5 seconds


## 5. Operators
Operators are tools that we use to transform, filter or combine data in stream.

* Think of it as:
    - LEGO pieces we can chain together to mkae something we want.
    - Mostly operators are used inside **.pipe(...)** to change or transform the data stream into our desirable format.
    - Commonly operators follow subscribe --> select --> transform --> unsubscribe approach.

#### Example - 1
    import {of} from 'rxjs';
    import {filter, map} from 'rxjs/operators';

    // 1. Create a stream of numbers
    const numbers$ = of(1, 2, 3, 4, 5);

    // 2. Use pipe to add operators
    numbers$.pipe(
        filter(num => num % 2 === 0), // Only even numbers
        map(num => num * 2) // Double them
    ).subscribe(result => {
        console.log('Final Output: ', result); // and finally print them
    });

    // Output:
    Final Output: 4
    Final Output: 8


#### Example - 2
    // This is close to a real-world search bar implementation

    import {fromEvent} from 'rxjs';
    import {map, debounceTime, distinctUntilChanged} from 'rxjs/operators';

    const input = document.getElementById('search-box') as HTMLInputElement; // DOM searching

    fromEvent(input, 'input').pipe(
        debounceTime(500),        // wait for 0.5s after typing stops.
        map(e => (e.target as HTMLInputElement).value.trim()), // clean input value by removing extra spaces.
        distinctUntilChanged(), // ignore if same as last value
        map(value => value.toUpperCase()) // Conver to upper case
    ).subscribe(searchTerm => {
        console.log('Search for: ', searchTerm); // results is logged when call conditions are met.
    })


Imagine user is typing like this:
h -> he -> hel -> hell -> hello -> hello (pause) -> hello (again) -> help

//Output - 
Search for: HELLO
Search for: HELP


## 6. Subject
A Subject is like an Observable we can push data into manually. it's basically multicast - one source, many listeners

* Think of it as:
    - A microphone that broadcasts data to everyone who's listening.
    - it's both an observable (others can subscribe to it) and an observer (we can push values into it using .next())

#### Example:
    import {Subject} from 'rxjs';

    // 1. Create a subject (notification system)
    const notification$ = new Subject<string>();

    // 2 . Component A subscribes
    notification$.subscribe(msg => {
        console.log('Component A got:', msg);
    });

    // 3. Component B subscribes
    notification$.subscribe(msg => {
        console.log('Compomemt B got:', msg);
    });

    // 4. Send Notification
    notification$.next('New message received..!');

    // 5. Another one
    notification$.next('Your order has been shipped..!');

    // 6. Complete the subject (shutsdown the notification system)
    notification$.complete();

    // 7. This will not be received by anyone as stream ended
    notification$.next('it will not be seen');

    //output :
    Component A got: New message received..!
    Component B got: New message received..!
    Component A got: Your order has been shipped..!
    Component B got: Your order has been shipped..!


## 7. Schedulers
A scheduler controls when and how a task (like emitting a value) runs - like a clock or thread manager in RxJS.

* It determines what executes when and where.
* Think of it as:
    - A clock manager for streams.
    - Schedulers let you shift execution between:
        - Synchronous (now)
        - Asynchronous (later)
        - Animation frame (next frame)
        - Queue (microtask-like)
* This is advanced topic, so we might not see this in every codebase. As this is used for timing, performance or multithreading-like behavior in JS

#### Example

    import {of, asyncScheduler, queueScheduler} from 'rxjs';
    import {observerOn} from 'rxjs/operators';

    // Log before any stream
    console.log('Start');

    // Normal (synchronous) observable
    of('sync').subscribe(value => console.log(value));

    // Queued execution (after current task completes)
    of('queued').pipe(observeOn(asyncScheduler)).subscribe(value => console.log(value));

    //Async execution (delayed, in next JS macro-task)
    of('async').pipe(observeOn(asyncScheduler)).subscribe(value => console.log(value));

    // Log after setting up streams
    console.log('End');


    // output:
    Start
    Sync
    End
    queued
    async

* console logging statements are executed synchronously, and synchronous tasks are executed as usual.
* Then we ququed the item so it will run in parallel or in multithread.
* and then finally Async code.
* Even though Async code is micro-task and is higher priority than settimeout, setInterval. we are using async scheduler here
which is macro-task and not the promises/ async await which are micro-tasks, that's why we got async at last.