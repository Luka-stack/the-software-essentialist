Task:
    - Write password validator

Behaviours:
    - must be between 5 and 15 characters
    - must contain at least one digit
    - must contain at least one upper case letter
    - must return object
        - with result as boolean
        - errors array with 

Examples:
    - low -> {
        result: false;
        errors: [ "LengthError", "SyntaxError" ]
    }

    - strongpassword -> {
        result: false;
        errors: [ "SyntaxError" ]
    }

    - stringpassword1 -> {
        result: false;
        errors: [ "SyntaxError" ]
    }

    - StrongPasswor6 -> {
        result: true;
        errors: []
    }

    - StringPassword1234567 -> {
        result: false;
        errors: [ "LengthError" ]
    }