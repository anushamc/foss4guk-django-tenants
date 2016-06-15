from django.shortcuts import render
from django.views.generic.base import View, TemplateView
from django.core.serializers import serialize
from .models import Accident
from django.http.response import HttpResponse

class IndexView(TemplateView):
    template_name = 'index.html'


class AccidentsGeojson(View):
    def get(self, request):
    	geojson = serialize('geojson', Accident.objects.all(),
          geometry_field='geom',
          # converts the 27700 geometry to 4326
          fields=('accident_index', 'accident_severity', 'number_of_vehicles', 'number_of_casualties', 'date'))
    	return HttpResponse(geojson)