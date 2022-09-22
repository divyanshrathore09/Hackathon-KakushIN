from django.db import models
from agency.models import Agency

# Create your models here.
class Nurse(models.Model):
   name = models.CharField(max_length=100)
   mobile=models.CharField(max_length=12)
   email = models.EmailField()
   longitude = models.FloatField()
   latitude = models.FloatField()
   password = models.CharField(max_length=100)
   ExperienceYear = models.IntegerField()
   speciality= models.CharField(max_length=50)
   resume = models.FileField(upload_to='storage/resumes')
   identity = models.FileField(upload_to='storage/identity')
   qualification = models.FileField(upload_to='storage/qual', default='storage/qual/dumy.pdf')
   img=models.ImageField(upload_to='storage/img')
   isActive = models.BooleanField(default=False)
   agencyName = models.ForeignKey(Agency,on_delete=models.CASCADE)

   
