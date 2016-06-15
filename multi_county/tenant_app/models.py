from django.contrib.gis.db import models

class Accident(models.Model):
    accident_index = models.CharField(max_length=20)
    location_easting_osgr = models.IntegerField()
    location_northing_osgr = models.IntegerField()
    longitude = models.FloatField()
    latitude = models.FloatField()
    police_force = models.IntegerField()
    accident_severity = models.IntegerField()
    number_of_vehicles = models.IntegerField()
    number_of_casualties = models.IntegerField()
    date = models.DateField()
    day_of_week = models.IntegerField()
    time = models.TimeField()
    # GeoDjango-specific: a geometry field (PointField)
    geom = models.PointField(srid=27700, null=True)
    objects = models.GeoManager()