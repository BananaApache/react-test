
from django.shortcuts import render
from .models import TodoModel
from .forms import TodoForm
from rest_framework import viewsets
from .serializers import TodoSerializer

# Create your views here.


def make_todo(request):
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            f = TodoModel(title=cd['title'], description=cd['description'], completed=cd['completed'])
            f.save()
            form = TodoForm()
    else:
        form = TodoForm()

    return render(request, 'make_todo.html', {"form": form})


def home(request):
    return render(request, 'home.html')

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = TodoModel.objects.all()

    
