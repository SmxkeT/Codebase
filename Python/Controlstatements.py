def math1(a, b, c): #4 functions with math formulas ready for 4 arguments to calculate.
    print(-a +b*c)

def math2(a, b, c):
    print((a+b)%c)

def math3(a, b, c, d):
    print(a + -b*c / d)

def math4(a, b, c, d, e, f):
    print(a+b / c*d -e %f)

def usermath(): #Function that takes 2 numbers and divides and displays the result.
    num1 = int(input("Enter a number; "))
    num2 = int(input("Enter a second number; "))
    print(f"Dividing the number has returned: {num1 / num2}!") 

math1(5, 8, 6)  #calling the functions and filling them with numbers to be calculated with the above formulas.
math2(55, 9, 9)
math3(20, 3, 5, 8)
math4(5, 15, 3, 2, 8, 3)

usermath() #calling  function
