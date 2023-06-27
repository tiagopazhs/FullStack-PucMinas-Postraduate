from django.db import models

class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    idade = models.IntegerField()
    email = models.EmailField()
    endereco = models.CharField(max_length=200)
    telefone = models.CharField(max_length=20)
    curso = models.CharField(max_length=100)
