from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Agency
import json
from nurse.models import Nurse
import jwt
import json
from bson import json_util
from rest_framework.decorators import api_view
from django.core.files.storage import FileSystemStorage


# Create your views here.
@api_view(['POST', ])
def createAgency(request):
  request = request.POST
  try:
    name = request['name']
    email = request['email']
    mobile = request['mobile']
    latitude = request['latitude']
    longitude = request['longitude']
    reason = request['reason']
    message = request['message']
    password = request['password']
    obj =Agency.objects.create(name=name, email=email, mobile=mobile, latitude=latitude, longitude=longitude, reason=reason, message=message, password=password)
    obj.save()

    returnObj = Agency.objects.get(name=name, email=email, mobile=mobile, latitude=latitude, longitude=longitude, reason=reason, message=message, password=password)

    data = {'id': returnObj.id, 'name': returnObj.name, 'email': returnObj.email, 'mobile': returnObj.mobile, 'longitude': returnObj.longitude, 'latitude': returnObj.latitude, 'isActive': returnObj.isActive}

    returnObj = jwt.encode(data, "secret", algorithm="HS256")
    
    
    return JsonResponse({'status': 200, 'response': json.loads(json_util.dumps(data)), 'message': "User created Successfully."})
  
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})

@api_view(['POST', ])
def login(request):
  request = request.POST
  try:
    mail = request['email']
    password = request['password']
    obj = Agency.objects.get(email=mail, password=password)
    if obj and obj.isActive:
      data = {'id': obj.id, 'name': obj.name, 'email': obj.email, 'mobile': obj.mobile, 'password': obj.password}
      data = jwt.encode(data, "secret", algorithm="HS256")

      return JsonResponse({'status': 200, 'response': json.loads(json_util.dumps({'token': data})), "token": data})
    
    return JsonResponse({'status': 300, 'response': json.loads(json_util.dumps({'message': "Please ask admin for verification"})), "token": " "})
    
  except Exception as e:
    return JsonResponse({'status':400, 'response': str(e)})

@api_view(['POST', ])
def addNurse(request):
  request = request.POST
  try:
    name = request['name']
    mobile = request['mobile']
    email = request['email']
    latitude = request['latitude']
    longitude = request['longitude']
    ExperienceYear = request['ExperienceYear']
    speciality = request['speciality']
    
    resume=request.FILES['resume']
    resumeFS=FileSystemStorage()
    resumeName = resumeFS.save(resume.name,resume)
    resumeURL = resumeFS.url(resumeName)

    identity=request.FILES['identity']
    identityFS=FileSystemStorage()
    identityName = identityFS.save(identity.name,identity)
    identityURL = identityFS.url(identityName)

    qualification=request.FILES['qualification']
    qualificationFS=FileSystemStorage()
    qualificationName = qualificationFS.save(qualification.name,qualification)
    qualificationURL = qualificationFS.url(qualificationName)

    img=request.FILES['img']
    imgFS=FileSystemStorage()
    imgName = imgFS.save(img.name,img)
    imgURL = imgFS.url(imgName)
    # resume, qualification, identity, img

    token = decode(request['token'])
    if token['status']==200:
      pass
    agency = token['response']['name']

    obj = Nurse.objects.create(name=name, email=email, mobile=mobile, latitude=latitude, longitude=longitude, ExperienceYear=ExperienceYear, speciality=speciality,agencyName=agency, resume=resumeURL, qualification=qualificationURL, identity=identityURL, img=imgURL)
    obj.save()
  except Exception as e:
    return JsonResponse({'status': 400, 'response': str(e)})

@api_view(['POST', ])
def nurses(request):
  try:
    data = decode(request['token'])
    if data['status']==200:
      obj = Nurse.objects.get(agencyName=data['response']['name'])
      return JsonResponse({'status':200, 'response': json.load(json.utils.dumps(obj)), 'token': request['token']})
    return {'status':300, 'response': data['response']}
  except Exception as e:
    return JsonResponse({'status':400, 'response': str(e)})


def decode(token):
  try:
    helper = jwt.decode(token, "secret", algorithms=["HS256"])
    return {'status': 200, 'response': helper}
  except Exception as e:
    return {'status': 400, 'reponse': "From decode part", 'message': str(e)}