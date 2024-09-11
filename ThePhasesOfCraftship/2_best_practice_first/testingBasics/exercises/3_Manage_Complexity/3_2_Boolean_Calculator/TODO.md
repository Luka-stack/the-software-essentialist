# Task

> Create a boolean calcuator that takes a boolean expression and evaluates it to compute the correct boolean output

# Examples

## Single Values

> "true" -> true
> "false" -> false

## Not Operator

> "not true" -> false
> "not false" -> true
> "not (true or false) -> false"
> "not true or false" -> false
> "not" -> throw Error
> "true not" -> throw Error

## And Operator

> "false and false" -> false
> "true and false" -> false
> "false and true" -> false
> "true and true" -> true
> "and" -> throw Error
> "true and" -> throw Error
> "and true" -> throw Error

## Or Operator

> "false or false" -> false
> "true or false" -> true
> "false or true" -> true
> "true or true" -> true
> "or" -> throw Error
> "or false" -> throw Error
> "false or" -> throw Error

## Order

> "not false and true" -> true
> "true or false or false" -> true
> "true or false and true" -> true
