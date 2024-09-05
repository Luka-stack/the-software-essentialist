Task:
    - write function to process a sequence of integers

Behaviour:
    - find minimum number
    - find maximum number
    - count the number of elements in array
    - calculate the average value

Examples:
    - [1] -> {
        min: 1,
        max: 1,
        len: 1,
        avg: 1
    }

    - [1, 2, 3] -> {
        min: 1,
        max: 3,
        len: 3,
        avg: 2,
    }

    - [0] -> {
        min: 0,
        max: 0,
        len: 0,
        avg: 0
    }

    - [-25, -10] -> {
        min: -25,
        max: -10,
        len: 2,
        avg: -17.5
    }

    - [] -> throw error

    - ["1", "2"] -> throw error