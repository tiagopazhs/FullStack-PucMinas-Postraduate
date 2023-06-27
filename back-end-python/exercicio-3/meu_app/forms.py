from django import forms
from meu_app.models import Aluno

class AlunoForm(forms.ModelForm):
    class Meta:
        model = Aluno
        fields = ['nome', 'idade', 'email', 'endereco', 'telefone', 'curso']
