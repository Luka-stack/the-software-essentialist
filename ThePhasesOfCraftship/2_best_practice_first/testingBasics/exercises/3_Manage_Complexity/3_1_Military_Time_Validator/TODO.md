# Task

> Write a function capable of validating whether a string time range is a valid military time range or not

# Functionality

> get time range as a string
> return true if is a valid military time range
> return false if is not a valid military time range
> return false if passed arugment does not have valid format
> throw error if passed argument is not a string

# Examples

> "01:12 - 14:32" -> true
> "00:00 -> 00:01" -> true
> "" -> false
> "25:00 - 13:42" -> false
> "14:66 - " -> false
> "14:55 - 12" -> false
> "12 - 13" -> false
> 123 -> throw an InvalidArgument Error
