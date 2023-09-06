
from django import forms

class TodoForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField()
    completed = forms.BooleanField(required=False)
    