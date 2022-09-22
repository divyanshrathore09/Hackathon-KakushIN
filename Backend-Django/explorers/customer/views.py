from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Customer
import jwt
import json
from bson import json_util
from rest_framework.decorators import api_view
from agency.views import decode
from nurse.models import Nurse
from geopy.geocoders import Nominatim
from geopy import distance
# Create your views here.

@api_view(['POST', ])
def createCustomer(request):
  # print(request.get('name'))
  request = request.POST
  print(request['name'])
  try:
    # import pdb;pdb.set_trace()
    name = request['name']
    mobile = request['mobile']
    email = request['email']
    longitude = request['longitude']
    latitude = request['latitude']
    password = request['password']
    obj = Customer.objects.create(name=name, mobile=mobile, email=email, longitude=longitude, latitude=latitude, password=password)
    obj.save()
    temp = Customer.objects.get(name=name, mobile=mobile, email=email, longitude=longitude, latitude=latitude, password=password)
    data = {'id': temp.id, 'name': temp.name, 'email':temp.email, 'longitude': temp.longitude, 'latitude': temp.latitude, 'password': temp.password}
    token = jwt.encode(data, "secret", algorithm="HS256")
    return JsonResponse({'status': 200, 'response': json.loads(json_util.dumps(data)), 'token': token})
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})


@api_view(['POST', ])
def login(request):
  request = request.POST
  try:
    email = request['email']
    password = request['password']
    obj = Customer.objects.get(email=email, password=password)
    if obj:
      data = {'id': obj.id, 'name': obj.name, 'email': obj.email}
      token = jwt.encode(data, "secret", algorithm="HS256")
      print(data)
      print(token)
      return JsonResponse({'status':200, 'response':json.loads(json_util.dumps(data)), 'token': token})
    return JsonResponse({'status':300, 'response': "Some error occurs", 'token': "Please Enter Correct details"})
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})


@api_view(['POST', ])
def updateCustomerRequirement(request):
  request = request.POST
  try:
    data = decode(request['token'])
    print(data)
    if data['status']==200:
      data = data['response']
      id = data['id']
      obj = Customer.objects.get(id=id)
      obj.careType = request['care_type']
      obj.urgency = request['urgency']
      obj.gender = request['gender']
      obj.religion = request['religion']
      obj.numberOfHour = request['numberOfHour']
      obj.save() 
      return JsonResponse({'status': 200, 'response': 'Details Updated Sucessfully', 'token': request['token']})

    return JsonResponse({'status': 300, 'response':data['response'], 'message': "Please enter details Again"})
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})


@api_view(['POST', ])
def displayNurseProfile(request):
  request = request.POST
  try:
    token = decode(request['token'])
    if token['status'] == 200:  
      nurse=Nurse.objects.filter(id=token['response']['id'])
      return JsonResponse({'status': 200, 'response':json.load(json.utils.dumps(nurse)), 'message': "Found Information"})
    
    return JsonResponse({'status': 300, 'response':token['response'], "message": "Please enter details again"})
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})


@api_view(['POST', ])
def displayNurses(request):
  request = request.POST
  try:
    token = decode(request['token'])
    if token['status']==200:
      # token = token['response']
      filteredList = []
      id = token['id']
      obj = Customer.objects.get(id=id)
      nurse=Nurse.objects.filter()
      place1 = (obj.longitude, obj.latitude)
      for singleNurse in nurse:
        place2 = (singleNurse.longitude, singleNurse.latitude)
        dis = int(distance.distance(place1, place2))
        if(dis <= 10):
          filteredList.append(singleNurse)
      return JsonResponse({'status':200, 'response': json.load(json.utils.dumps(filteredList)), 'message': "Found"})  
    return JsonResponse({'status':300, 'response': token['response'], 'message': "Please Enter your details again"})
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})

