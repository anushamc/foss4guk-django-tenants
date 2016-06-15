from django.conf.urls import patterns, url
from tenant_app.views import IndexView, AccidentsGeojson

urlpatterns = patterns('',
    url(r'^$', IndexView.as_view(), name="index"),    
    url(r'^accidentsGeojson/', AccidentsGeojson.as_view(), name="accidentsGeojson"),
)