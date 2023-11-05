
from django.urls import path
from .views import index 

urlpatterns = [
    path('home',index),
    path('enterdata',index),
    path('',index),
    path("dashboard",index)
]
