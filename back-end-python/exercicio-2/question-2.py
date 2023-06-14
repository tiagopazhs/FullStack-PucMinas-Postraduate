ages = []
while True:
    age = int(input("Enter the age of the student (or a negative number to stop): "))
    if age < 0:
        break
    ages.append(age)

if len(ages) == 0:
    print("No data provided.")
else:
    max_age = max(ages)
    min_age = min(ages)
    average = (max_age + min_age) / 2
    print("Média aritmética entre a maior e a menor idade: ", average)
