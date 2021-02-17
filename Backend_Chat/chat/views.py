from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class Home(TemplateView):
    template_name = 'index.html'

class Room(TemplateView):
    #React
    template_name = 'index.html'

    #método dispatch mira a la solicitud para determinar si se trata de un GET, POST, etc
    #Es el punto de entrada para las solicitudes y, en última instancia, el responsable de devolver la respuesta.
    def dispatch(self, request, **kwargs):
        self.room_name = kwargs['room_name']
        return super().dispatch(request, **kwargs)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["room_name"] = self.room_name
        return context
    
    