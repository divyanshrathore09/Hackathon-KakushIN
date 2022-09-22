from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from . import views

urlpatterns = [
    path('login/',views.login, name='NurseLogin'),
    path('register/', views.createNurse, name='createNurse'),
    path('profileCompleteness/', views.profileCompleteness, name='profileCompleteness'),
    # path('requirements/', views.updateCustomerRequirement, name="updateCustomerRequirements"),
    # path('nurses/', views.displayNurses, name="displayNurses")
]