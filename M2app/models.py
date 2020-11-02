from django.db import models

# Create your models here.

class Registrationform(models.Model):
    Firstname = models.CharField(max_length=20)
    Lastname = models.CharField(max_length=20)
    Email = models.CharField(max_length=30)
    DOB = models.CharField(max_length=12)
    Gender = models.CharField(max_length=10)
    Hobby = models.TextField()
    Phone = models.CharField(max_length=12)
    Password = models.CharField(max_length=15)
    CPassword = models.CharField(max_length=15)

    def __str__(self):
        return self.Firstname

class loginform(models.Model):
    Email = models.CharField(max_length=200)
    Password = models.CharField(max_length=200)

    def __str__(self):
        return self.Email
