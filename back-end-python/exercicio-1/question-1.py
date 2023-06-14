import datetime
current_month = 7
even_odd_month = "impar"
sum_months = 0
aux = 1

while aux < current_month:
    sum_months += aux
    aux += 1

next_month = current_month + 1

if current_month % 2 == 0:
    even_odd_month = "par"

even_odd_moth = current_month % 2 == 0

print("A soma dos valores menores que o mês atual é igual a", sum_months)
print("O próximo mês é", next_month)
print("O mês atual é", even_odd_month)
