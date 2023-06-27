from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from meu_app.forms import AlunoForm
from meu_app.models import Aluno

def home(request):
    return HttpResponse("Esta é a home!")

def hello_world(request):
    return HttpResponse("Hello, World!")

def cadastrar_aluno(request):
    if request.method == 'POST':
        form = AlunoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_alunos')
    else:
        form = AlunoForm()
    return render(request, 'cadastrar_aluno.html', {'form': form})

def lista_alunos(request):
    alunos = Aluno.objects.all()
    return render(request, 'lista_alunos.html', {'alunos': alunos})

def detalhes_aluno(request, aluno_id):
    aluno = get_object_or_404(Aluno, id=aluno_id)
    return render(request, 'detalhes_aluno.html', {'aluno': aluno})

