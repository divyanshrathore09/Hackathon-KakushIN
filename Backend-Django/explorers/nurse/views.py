from urllib import response
from django.shortcuts import render
from agency.views import decode
from django.http.response import JsonResponse
from agency.models import Agency
from .models import Nurse
import jwt
import json
from bson import json_util
from rest_framework.decorators import api_view
from django.core.files.storage import FileSystemStorage


@api_view(['POST', ])
def createNurse(request):
    request2 = request.POST
    try:
        # import pdb;pdb.set_trace();
        name = request2['name']
        mobile = request2['mobile']
        email = request2['email']
        longitude = request2['longitude']
        latitude = request2['latitude']
        ExperienceYear = request2['ExperienceYear']
        speciality = request2['speciality']
        password = request2['password']
        agency = Agency.objects.get(id=1)
        
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

        obj =Nurse.objects.create(name=name, mobile=mobile, email=email, longitude=longitude, 
                                    latitude=latitude, ExperienceYear=ExperienceYear, 
                                    speciality=speciality, password=password, resume=resume, 
                                    qualification=qualification, identity=identity, img=img, 
                                    agencyName=agency
                                )
        obj.save()
        
        returnObj = Nurse.objects.get(name=name, mobile=mobile, email=email, longitude=longitude, latitude=latitude, ExperienceYear=ExperienceYear, speciality=speciality, password=password)
        
        data = {'id' : returnObj.id, 'name' : returnObj.name, 'mobile' : returnObj.mobile, 'email': returnObj.email, 'longitude': returnObj.longitude, 'latitude': returnObj.latitude, 'ExperienceYear': returnObj.ExperienceYear, 'speciality': returnObj.speciality, 'password': returnObj.password}
        returnObj = jwt.encode(data, "secret", algorithm = "HS256")

        return JsonResponse({'status': 200, 'response': json.loads(json_util.dumps(data)), 'message': "Nurse Created Successfully"})
    except Exception as e:
        return JsonResponse({'status': 400, 'response':str(e)})

@api_view(['POST'], )
def login(request):
    request = request.POST
    try:
        # import pdb;pdb.set_trace();
        email = request['email']
        password = request['password']
        obj = Nurse.objects.get(email=email, password=password)
        if obj.id:
            data = {'id':obj.id, 'name': obj.name, 'email': obj.email, 'mobile':obj.mobile, 'password':obj.password}
            data = jwt.encode(data, 'secret', algorithm='HS256')

            return JsonResponse({'status': 200, 'response': json.loads(json_util.dumps({'token': data})), "token": data})
        return JsonResponse({'status': 300, 'response': json.loads(json_util.dumps({'message': "Please ask admin for verification"})), "token": " "})
    except Exception as e:
        return JsonResponse({'status':400, 'response': str(e)})

@api_view(['POST'] )
def profileCompleteness(request):
    request = request.POST
    try:
        data = decode(request['token'])
        if data['status']==200:
            data = data['response']
            id = data['id']
            obj = Nurse.objects.get(id=id)
            # obj.name = request['name']
            # obj.mobile = request['mobile']
            # obj.longitude = request['longitude']
            # obj.latitude = request['latitude']
            # obj.experienceYear = request['ExperienceYear']
            # obj.speciality = request['speciality']
            # obj.img = request['img']
            # obj.isActive = request['isActive']
            # obj.agencyName = request['agencyName']
            return JsonResponse({'status':200, 'response': json.load(json.utils.dumps(obj)), 'token': request['token']})
        return {'status':300, 'response': data['response']}
    except Exception as e:
        return JsonResponse({'status':400, 'response': str(e)})
    