from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]

from django.urls import path
from meu_app.views import home
from meu_app.views import hello_world
from meu_app.views import lista_alunos
from meu_app.views import cadastrar_aluno
from meu_app.views import detalhes_aluno
from meu_app.views import atualizar_aluno
from meu_app.views import excluir_aluno

urlpatterns = [
    path('', home),
    path('hello/', hello_world),
    path('cadastrar_aluno/', cadastrar_aluno, name='cadastrar_aluno'),
    path('lista_alunos/', lista_alunos, name='lista_alunos'),
    path('alunos/<int:aluno_id>/', detalhes_aluno, name='detalhes_aluno'),
    path('alunos/<int:aluno_id>/atualizar/', atualizar_aluno, name='atualizar_aluno'),
    path('excluir_aluno/<int:aluno_id>/', excluir_aluno, name='excluir_aluno'),
]
