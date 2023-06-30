from django.urls import include, path
from django.urls import path
from .views import AtendimentoListAPIView

urlpatterns = [
    path('api/atendimentos/', AtendimentoListAPIView.as_view(), name='atendimentos-list'),
]


