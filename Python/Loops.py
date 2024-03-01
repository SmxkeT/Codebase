#ex 1
 
a,b = 0, 1 #var of 0 and 1

while b < 50:   #while loop to iterate until b reaches 50
    print(b) 
    a,b = b, a+b #simultaneous assignment to update the value of the var per iteration.


#ex 2

ask = int(input("Enter a number to times by 10: ")) #take a number input
table = 1 #times table 
count = 0 #answer storage.

for i in range(10): #for loop to iterate 10 times.
    count = ask*table #count becomes the answer of user inp * times table num.
    print(f"{ask} x {table} = {count}") # print results
    table += 1 #add 1 to times table and iterate again until times table of 10 has been completed. 

