def calculator():
    isGoing = True
    while isGoing:    
        print('##################Calculator#######################\n')
        operation = input("Enter +,-,*,/ for addition subtraction , multiplication,division \n")
        input1 = int(input("Enter value for 1st variable \n"))
        input2 = int(input("Enter value for 1st variable \n"))
        
        print('##################Calculator#######################\n')
        
        
        if operation == '+':
            print(f'The Result for addition of the two numbers is: {input1 + input2}')
            isGoing = False
        elif operation == '-':
            print(f'The Result for addition of the two numbers is: {input1 - input2}')
            isGoing = False
        elif operation == '*':
            print(f'The Result for addition of the two numbers is: {input1 * input2}')
            isGoing = False
        elif operation == '/':
            try:
                print(f'The Result for addition of the two numbers is: {input1 / input2}')
                isGoing = False
            except ZeroDivisionError:
                print("The denominator cannot be zero !!!!")
        else:
            print("Please provide a correct operation")
            
calculator()