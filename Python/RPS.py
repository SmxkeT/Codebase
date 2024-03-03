import random
import time

def RPS():
    PCScore = 0
    userscore = 0
    NPC = ["R", "P", "S"]

    while(1):
        userchoice = input("Pick Rock Paper or Scissors (R/P/S): ")
        PCchoice = random.choice(NPC) 

        if PCchoice == "R" and userchoice == "R":
            print("It's a tie, both have chosen rock!")

        elif PCchoice == "R" and userchoice == "P":
            print("You Win!, Paper beats rock")
            userscore += 1

        elif PCchoice == "R" and userchoice == "S":
            print("NPC Wins!, Rock beats scissors.")
            PCScore += 1

        if PCchoice == "P" and userchoice == "P":
            print("It's a draw!, Both have chosen paper.")

        elif PCchoice == "P" and userchoice == "R":
            print("NPC Wins!, Paper beats rock.")
            PCScore += 1
        
        elif PCchoice == "P" and userchoice == "S":
            print("You win!, Scissors beat paper")
            userscore += 1
        
        if PCchoice == "S" and userchoice == "S":
            print("It's a tiem both have chosen scissors.")

        elif PCchoice == "S" and userchoice == "R":
            print("You win!, Rock beats scissors")
            userscore += 1

        elif PCchoice == "S" and userchoice == "P":
            print("NPC Wins, Scissors beat paper.")
            PCScore += 1

        re = input("Do you want to play again? Y/N: ")
        if re == "N":
            print("|Final Scores Loading...|")
            time.sleep(3)
            print(f"The computer had {PCScore} points")

            time.sleep(2)
            print(f"You had {userscore} points")
            if userscore > PCScore:
                print("YOU WIN!")
            elif userscore < PCScore:
                print("NPC WINS!")
            else:
                print("IT'S A TIE!")
            break
        else:
            pass

RPS()