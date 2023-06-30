from django.urls import path

urlpatterns = [
    path('api/atendimentos/', 'easy_call.views.AtendimentoListAPIView.as_view()'),
]
