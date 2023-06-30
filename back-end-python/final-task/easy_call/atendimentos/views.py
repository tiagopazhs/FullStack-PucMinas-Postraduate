from django.shortcuts import render
from .models import Atendimento

def listar_atendimentos(request):
    atendimentos = Atendimento.objects.all()
    return render(request, 'atendimentos/atendimentos.html', {'atendimentos': atendimentos})
