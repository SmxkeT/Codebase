#ex1
def lscontent(): #Function to display content of a list and return the list.
    ls = [10, 2, 3, 4, 7]
    print(f"The content of the list is{ls}")
    return ls 

def max_list(ls): #take list as argument and iterate through it to find the highest number.
    max = ls[0] #initial number to start with. 
    for i in ls:
        if max < i:
            max = i #max var becomes i if the number is lower than i.
    print(f"The max value of the list is {max}") #Display the contents of the original list.


content = lscontent() #Turn lscontent into var to pass through max_list function and find the max value. 

max_list(content) #calling function with ls as argument.

#ex2#

def factorial(): #function to calculate factorial of input number.
    num = int(input("Enter a number: ")) #take user inp
    total = num #Total becomes userinp.

    if num < 1: #loop to iterate based on userinp and times as long as greater than 0.
        print("Number is one.")
    else:
        for i in range(num):
            if i > 0:
                total = total*i
    print(f"The factorial is {total}") #Display factorial 

factorial() #calling function.


#ex3#

def primecheck(primer): #Function to check if number is prime.
    if primer == 1:
        return f"{primer} is not a prime number." #returns to function if num is prime or not prime. 
    
    elif primer == 2:
        return f"{primer} is a prime number"
    
    else:
        for i in range(2, primer):        #loop to divide number by 2 to determine if number is prime or not.
            if primer % i == 0:
                return f"{primer} is not a prime number" 
        return f"{primer} is a prime number"
    
print(primecheck(15))    #calling the functions to display wether prime or not.
print(primecheck (21))
print(primecheck(9))
print(primecheck(2))
print(primecheck(7))
print(primecheck(1))
print(primecheck(3))
print(primecheck(5))
print(primecheck(11))
print(primecheck(13))
