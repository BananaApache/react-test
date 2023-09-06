
from django.urls import path, include
from . import views

urlpatterns = [
    path('make-todo/', views.make_todo),
    path('home/', views.home)
]