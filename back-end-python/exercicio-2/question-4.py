clients = []
while True:
    name = input("Informe a razão social do cliente (ou pressione Enter para finalizar): ")
    if name == "":
        break
    total_purchases = float(input("Informe o valor total de compras deste cliente: "))
    clients.append((name, total_purchases))

if len(clients) == 0:
    print("Nenhum cliente informado.")
else:
    sorted_clients = sorted(clients, key=lambda x: x[1], reverse=True)
    print("Relatório: Clientes por valor total de compras (ordem decrescente):")
    for client in sorted_clients:
        print(client[0], "- Valor total de compras:", client[1])
