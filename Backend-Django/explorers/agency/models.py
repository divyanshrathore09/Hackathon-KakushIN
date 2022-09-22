from django.db import models

class Agency(models.Model):
   name=models.CharField(max_length=100)
   email=models.EmailField()
   mobile=models.CharField(max_length=12)
   password = models.CharField(max_length=100, default='test')
   longitude=models.FloatField()
   latitude=models.FloatField()
   reason=models.TextField()
   message=models.TextField()
   isActive=models.BooleanField(default=False)
  

