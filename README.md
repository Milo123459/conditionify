# conditionify

Fast and easy way to create conditional functions

# Examples

Run functions that return true, or get a value on run the defaultFn

```ts
import { Condition } from 'conditionify';
const condition: Condition = new Condition(
	[true, () => console.log(true), () => console.log('Hello from Conditionify!')],
	[{ returns: true, defaultFn: console.log }]
);
```

Expected output:

```
true
true
```

Log anything that isn't a function, and also run the functions

```ts
import { Condition } from 'conditionify';
const condition: Condition = new Condition(
	[false, () => console.log(true), () => console.log('Hello from Conditionify!')],
	[{ returns: '*', defaultFn: console.log }]
);
```

Expected output:

```
false
true
Hello from Condiitionify!
```