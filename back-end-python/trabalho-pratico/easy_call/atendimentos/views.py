from django.shortcuts import render
from django.http import JsonResponse
from .models import Atendimento

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Atendimento
from .serializers import AtendimentoSerializer


def atendimentos_list(request):
    atendimentos = Atendimento.objects.all()
    data = {
        'atendimentos': list(atendimentos.values())
    }
    return JsonResponse(data)

class AtendimentoListAPIView(APIView):
    def get(self, request):
        atendimentos = Atendimento.objects.all()
        serializer = AtendimentoSerializer(atendimentos, many=True)
        return Response(serializer.data)
