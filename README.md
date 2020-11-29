# conditionify

Fast and easy way to create conditional functions

Example in TypeScript

```ts
import { Condition } from 'conditionify';
const condition: Condition = new Condition(
	[true, () => true, () => console.log('Hello from Conditionify!')],
	[{ returns: true, defaultFn: console.log }]
);
condition.go();
```

Expected output:

```js
true;
true;
```