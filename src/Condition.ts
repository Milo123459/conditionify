interface ConditionFunction {
	(): void | any | Promise<void> | Promise<any>;
}
interface DefaultFn {
	(): void | any | Promise<void> | Promise<any>;
}
interface ConditionConfig {
	defaultFn?: DefaultFn;
	returns: '*' | any;
}
class Condition {
	public constructor(
		conditions: Array<ConditionFunction | any>,
		conditionsConfig: Array<ConditionConfig>
	) {}
}

export { Condition, DefaultFn, ConditionConfig, ConditionFunction };
