from django.db import models

class Atendimento(models.Model):
    cliente = models.ForeignKey('Cliente', on_delete=models.CASCADE)
    atendente = models.ForeignKey('Atendente', on_delete=models.CASCADE)
    data = models.DateTimeField(auto_now_add=True)

class Mensagem(models.Model):
    atendimento = models.ForeignKey(Atendimento, on_delete=models.CASCADE)
    remetente = models.CharField(max_length=100)
    conteudo = models.TextField()
    data = models.DateTimeField(auto_now_add=True)

class Cliente(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()

class Atendente(models.Model):
    nome = models.CharField(max_length=100)
    cargo = models.CharField(max_length=100)
