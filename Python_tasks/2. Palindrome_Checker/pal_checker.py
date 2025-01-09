def isPalindrome(line):
    
    rev = line[::-1]
     
    if line == rev:
        print(f"The given string {line} is a Palindrome")
    else:
        print(f"The given string {line} is not a Palindrome")
        
        
intput1  = input("Give a string to check if it is a palindrome or not \n")

isPalindrome(intput1)