from django.db import models
from nurse.models import Nurse
# Create your models here.

class Customer(models.Model):
   name = models.CharField(max_length=100)
   mobile = models.CharField(max_length=12)
   email = models.EmailField()
   longitude = models.FloatField()
   latitude = models.FloatField()
   password = models.CharField(max_length=100)
   noOfHours = models.IntegerField(default=1)
   careType = models.CharField(max_length=50,default="None")
   gender = models.CharField(max_length=12,default="None")
   urgency = models.BooleanField(default=False)
   religion = models.CharField(max_length=100,default="None")
   
class CustomerNurse(models.Model):
   nurse = models.ForeignKey(Nurse,on_delete=models.CASCADE)
   customer = models.CharField(max_length=100)
   rating = models.IntegerField()
   review = models.TextField()