#ex 1
import time #Allowing use of time functions. 

count = 0 #store the total sum

ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] #list to hold integers.

for i in range(len(ls)): #Loop to iterate through the length of the list
    count += ls[i] #add ls to count var to total result.

print(f"The sum is {count}") #display sum of the list.


#==========================#
#ex2

count1 = 0 #Storage for total

ls = [20, 30, 25, 35, -16, 60, -100] #list of integers/

for i in range(len(ls)): #Loop to iterate the length of the list
    count1 += ls[i] #add list to count1 to store total per iteration.

print(f"average of the list is: {(round(count1 / len(ls),1))}") #Display the average by diving total by the amount in list and round to 1 decimal place.

#====================#
#ex3


ls = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49] #list of integers.

max = max(ls) #Using max function to calculate maximum of the list.
min = min(ls) #using the min function to calculate the minimum of the list.

print("Original list is: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49].") #Display original list
time.sleep(1) #Pause for  1 second.
print(f"Max value of above list is {max}") #Display the maximum value of the list.
time.sleep(1) #pause for 1 second again.
print(f"The Min value of the above list is {min}") #Display the minimum value of the list.
 