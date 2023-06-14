import random

participants = []
while True:
    name = input("Enter the name of the participant (or press Enter to finish): ")
    if name == "":
        break
    participants.append(name)

if len(participants) == 0:
    print("No participants.")
else:
    winner = random.choice(participants)
    print("The winner is:", winner)
