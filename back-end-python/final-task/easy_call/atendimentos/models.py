from django.db import models

class Atendimento(models.Model):
    cliente = models.CharField(max_length=100)
    atendente = models.CharField(max_length=100)

    def __str__(self):
        return f"Atendimento {self.pk}"

class Mensagem(models.Model):
    atendimento = models.ForeignKey(Atendimento, on_delete=models.CASCADE)
    remetente = models.CharField(max_length=100)
    conteudo = models.TextField()
    data_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mensagem {self.pk} - {self.remetente}"
