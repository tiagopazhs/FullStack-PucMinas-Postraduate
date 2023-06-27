from django.shortcuts import render
from django.http import HttpResponse
from meu_app.forms import AlunoForm

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

