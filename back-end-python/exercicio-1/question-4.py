num_months = int(input("Digite o número de meses que deseja fazer controle alimentar: "))
weight_loss_goal = int(input("Digite quantos quilos deseja perder: "))

weight_per_month = weight_loss_goal / num_months

for month in range(1, num_months + 1):
    print(f"Mês {month} você irá perder {weight_per_month:.2f}KG")
