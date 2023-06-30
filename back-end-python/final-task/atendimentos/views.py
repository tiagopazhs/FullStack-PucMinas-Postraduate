from django.shortcuts import render
from .models import Atendimento

def listar_atendimentos(request):
    atendimentos = Atendimento.objects.all()
    return render(request, 'atendimentos/atendimentos.html', {'atendimentos': atendimentos})

def criar_atendimento(request):
    if request.method == 'POST':
        form = AtendimentoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('listar_atendimentos')
    else:
        form = AtendimentoForm()
    return render(request, 'atendimentos/criar_atendimento.html', {'form': form})

from django.shortcuts import render, get_object_or_404
from .models import Atendimento

def detalhar_atendimento(request, atendimento_id):
    atendimento = get_object_or_404(Atendimento, pk=atendimento_id)
    return render(request, 'atendimentos/detalhar_atendimento.html', {'atendimento': atendimento})

from django.shortcuts import render, get_object_or_404, redirect
from .forms import AtendimentoForm
from .models import Atendimento

def atualizar_atendimento(request, atendimento_id):
    atendimento = get_object_or_404(Atendimento, pk=atendimento_id)
    if request.method == 'POST':
        form = AtendimentoForm(request.POST, instance=atendimento)
        if form.is_valid():
            form.save()
            return redirect('detalhar_atendimento', atendimento_id=atendimento.id)
    else:
        form = AtendimentoForm(instance=atendimento)
    return render(request, 'atendimentos/atualizar_atendimento.html', {'form': form, 'atendimento': atendimento})

from django.shortcuts import get_object_or_404, redirect
from .models import Atendimento

def excluir_atendimento(request, atendimento_id):
    atendimento = get_object_or_404(Atendimento, pk=atendimento_id)
    atendimento.delete()
    return redirect('listar_atendimentos')
