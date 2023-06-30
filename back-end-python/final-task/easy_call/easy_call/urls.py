from django.urls import path
from atendimentos.views import criar_atendimento, listar_atendimentos, detalhar_atendimento, atualizar_atendimento, excluir_atendimento

urlpatterns = [
    path('atendimentos/', listar_atendimentos, name='listar_atendimentos'),
    path('atendimentos/criar/', criar_atendimento, name='criar_atendimento'),
    path('atendimentos/<int:atendimento_id>/', detalhar_atendimento, name='detalhar_atendimento'),
    path('atendimentos/<int:atendimento_id>/atualizar/', atualizar_atendimento, name='atualizar_atendimento'),
    path('atendimentos/<int:atendimento_id>/excluir/', excluir_atendimento, name='excluir_atendimento'),
]
