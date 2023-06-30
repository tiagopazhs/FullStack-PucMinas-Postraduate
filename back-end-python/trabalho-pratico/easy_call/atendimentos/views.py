from django.shortcuts import render
from django.http import JsonResponse
from .models import Atendimento

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AtendimentoSerializer
from django.views import View
from django.http import HttpResponse


def atendimentos_list(request):
    atendimentos = Atendimento.objects.all()
    data = {
        'atendimentos': list(atendimentos.values())
    }
    return JsonResponse(data)

class AtendimentoListAPIView(View):
    def get(self, request):
        # Assuming you want to retrieve a list of atendimentos
        atendimentos = ["Atendimento 1", "Atendimento 2", "Atendimento 3"]

        # Format the atendimentos as a string
        atendimentos_str = "\n".join(atendimentos)

        # Return the atendimentos as a response
        return HttpResponse(atendimentos_str)
