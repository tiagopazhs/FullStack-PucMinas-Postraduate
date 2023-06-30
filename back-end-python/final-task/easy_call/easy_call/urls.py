from django.urls import path
from atendimentos.views import listar_atendimentos

urlpatterns = [
    path('atendimentos/', listar_atendimentos, name='listar_atendimentos'),
]
