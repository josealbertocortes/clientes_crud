
from django.db import models

# Create your models here.
class Clients(models.Model):
 
    name = models.CharField(max_length=256, blank=True,null=True)
    lastname = models.CharField(max_length=256,blank=True,null=True)
    telephone = models.CharField(max_length=20, blank=True,null=True)
    email = models.EmailField()
    age = models.IntegerField(null=True, blank=True, default=0)
    status = models.CharField(max_length=20, blank=True,null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.name)