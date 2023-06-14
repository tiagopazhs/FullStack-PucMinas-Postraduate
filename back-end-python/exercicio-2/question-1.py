num_swimmers = 7
best_time = float('inf')  # initialize with a high value to ensure any time will be smaller
worst_time = float('-inf')  # initialize with a low value to ensure any time will be larger
total_time = 0
num_times_between_12_15 = 0

for i in range(num_swimmers):
    name = input("Enter the swimmer's name: ")
    time = float(input("Enter the swimmer's time in seconds: "))

    # Check for the best time
    if time < best_time:
        best_time = time
        best_swimmer = name

    # Check for the worst time
    if time > worst_time:
        worst_time = time
        worst_swimmer = name

    # Calculate the total time
    total_time += time

    # Check if the time is between 12s and 15s
    if 12 <= time <= 15:
        num_times_between_12_15 += 1

# Calculate the average time
average_time = total_time / num_swimmers

# Print the report
print("Relatório:")
print("Melhor tempo: ", best_swimmer, " - ", best_time, "s")
print("Pior desempenho: ", worst_swimmer, " - ", worst_time, "s")
print("Tempo médio: ", average_time, "s")
print("Quantidade de nadadores com tempo entre 12s e 15s: ", num_times_between_12_15)
