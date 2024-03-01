#EX1

def testdata(): #function to take 3 int inputs and check if they are equal or not.
    num1 = int(input("Enter a number; "))
    num2 = int(input("Enter a second number; "))
    num3 = int(input("Enter a final number; "))

    if num1 and num2 == num3:
        print("All numbers are equal.")
    elif num1 != num2 and num3:
        print("All numbers are different")
    else:
        print("Numbers are neither equal nor different.")

#EX 2

def upordown(): #function to take 3 int inputs and check if they are increasing or not.
    num1 = int(input("Enter a number; "))
    num2 = int(input("Enter a second number; "))
    num3 = int(input("Enter a final number; "))

    if num2 > num1 and num3:
        print("Numbers are increasing order.")
    elif num3 < num2 and num3:
        print("Numbers are decreasing order")
    else:
        print("Numbers are neither increasing nor decreasing.")

testdata() #calling the functions to initiate the program.
upordown()



