temperature1 = 10.12
temperature2 = -3.55
temperature3 = -10.55
temperature4 = 11.44
temperature5 = 22.22

# Find the smallest temperature
min_temperature = min(temperature1, temperature2, temperature3, temperature4, temperature5)

# Calculate the average of temperatures between 0 and 20
temperatures = [temperature1, temperature2, temperature3, temperature4, temperature5]
valid_temperatures = [temp for temp in temperatures if 0 < temp < 20]
average_temperature = sum(valid_temperatures) / len(valid_temperatures)

# Count negative and positive temperatures
negative_temperatures = 0
for temp in temperatures:
    if temp < 0:
        negative_temperatures += 1
positive_temperatures = 0
for temp in temperatures:
    if temp > 0:
        positive_temperatures += 1

# Print the results
print("A menor temperatura é ", min_temperature)
print("A média das temperaturas entre 0 e 20", average_temperature)
print("São ", negative_temperatures, " temperaturas negativas e ", positive_temperatures, " positivas.")
