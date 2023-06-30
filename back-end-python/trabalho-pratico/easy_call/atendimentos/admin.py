from django.contrib import admin
from .models import Atendimento, Mensagem, Cliente, Atendente

admin.site.register(Atendimento)
admin.site.register(Mensagem)
admin.site.register(Cliente)
admin.site.register(Atendente)
