import {of} from 'rxjs';
import {map} from 'rxjs/operators';

// map((x: any) => x * x)(of(1,2,3)).subscribe(v => console.log('Output is:', v));
// above and the below code are same...

of(1, 2, 3).pipe(
    map((x: any) => x * x)
).subscribe(v => console.log('output is:', v));