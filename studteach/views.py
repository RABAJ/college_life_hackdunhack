from __future__ import unicode_literals

from django.shortcuts import render


# Create your views here.
from django.shortcuts import render,redirect
from studteach.forms import RegistrationForm,DocumentForm,Problem,CommentForm
from django.contrib.auth.models import User
from studteach.models import UserProfile,Document,Problem1,Comment
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
#from pehla.forms import aadharform
from django.contrib.auth.decorators import login_required
from studteach.models import UserProfile
from django.forms.models import inlineformset_factory
from django.core.exceptions import PermissionDenied
from django.db.models import F
from django.core.exceptions import MultipleObjectsReturned
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.files.storage import FileSystemStorage

from django.views.decorators.csrf import csrf_exempt

from django.http import JsonResponse
import jwt
#import urllib2
import json

from django.contrib.auth import authenticate
from second.settings import SECRET_KEY
from .models import UserProfile
import random
#	numbers=[1,2,3,4,5]
#	name='paras agarwal'
#	args={'Myname': name,'numberss': numbers}
#	return render(request,'pehla/home.html',context=args)
# Create your views here.

@csrf_exempt
def register(request):
	data = {}
	if request.method == 'POST':
		username = request.POST.get("username")
		first_name = request.POST.get("first_name")
		last_name = request.POST.get("last_name")
		email = request.POST.get("email")
		city = request.POST.get("city")
		password1 = request.POST.get("password1")
		password2 = request.POST.get("password2")
		form = RegistrationForm(request.POST)
		if User.objects.filter(username=username).exists():
			data['success'] = True
			data['message'] = "Username already exists"
			return JsonResponse(data,safe=False)
		else:
			userDetail = UserDetail.objects.create(
				name=name,
				username=username,
				mobile=mobile,
				aadhar=aadhar
				)
			userDetail.save()

			user = User.objects.create_user(
				username=username,
				password1=password1
				)    

			user.save()

			jwtToken = {}
			jwtToken['username'] = username
			jwtToken['name'] = password
			jwtToken['mobile'] = mobile

			token = jwt.encode(jwtToken , SECRET_KEY , algorithm='HS256')

			data['success'] = True
			data['message'] = "User Registered"
			data['token'] = token

			return JsonResponse(data,safe=False)
	else:
		data['success'] = False
		data['message'] = "Method not allowed"        

		return JsonResponse(data,safe=False)
	if form.is_valid():
			form.save()
			#return redirect('/pehla1/login/')
			return redirect('studteach:login')

	else:
		form = RegistrationForm()

	args = {'form': form}
	return render(request, 'studteach/reg_form.html', args)

@csrf_exempt
def login1(request):
    data = {}
    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")

        try:
            user = User.objects.get(username=username)
        except Exception as e:
            print(str(e))
            data['success'] = False
            data['message'] = "Invalid Username"

            return JsonResponse(data,safe=False)    

        if user.check_password(password):

            jwtToken = {}
            jwtToken['username'] = username
            jwtToken['name'] = password

            token = jwt.encode(jwtToken , SECRET_KEY , algorithm='HS256')

            data['success'] = True
            data['message'] = "User authenticated"
            data['token'] = token

            return JsonResponse(data,safe=False)

        else:

            data['success'] = False
            data['message'] = "Invaild credentials"    

            return JsonResponse(data,safe=False)

def profile(request, pk=None):
	if pk:
		user = User.objects.get(pk=pk)
	else:
		user = request.user
	args = {'user': user}
	return render(request, 'studteach/profile.html',context=args)


class Attendance(TemplateView):
	template_name = 'studteach/attendance.html'

	def get(self,request):
		
		users = User.objects.all()
		args = {'users':users}
		return render(request, self.template_name ,args)


def attendance_view(request,id):
	UserProfile.objects.filter(id=id).update(attendance=F('attendance') + 1)
	return redirect('studteach:attendance')

def simple_upload(request):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)
        return render(request, 'studteach/simple_upload.html', {
            'uploaded_file_url': uploaded_file_url
        })
    return render(request, 'studteach/simple_upload.html')\


def model_form_upload(request):
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('studteach:profile')
    else:
        form = DocumentForm()
    return render(request, 'studteach/model_form_upload.html', {
        'form': form
    })


class MyResources(TemplateView):
	template_name = 'studteach/resources.html'

	def get(self,request):
		
		resources = Document.objects.all()
		args = {'resources':resources}
		return render(request,self.template_name, args)

class Problem2(TemplateView):
	template_name = 'studteach/problem.html'

	def get(self,request):
		form = Problem()
		probls = Problem1.objects.all().order_by('-created')
		args = {'form':form,'probls':probls}
		return render(request, self.template_name ,args)

	def post(self,request):
		form = Problem(request.POST)
		if form.is_valid():
			probll = form.save(commit=False)
			probll.user = request.user
			probll.save()


			text = form.cleaned_data['probl']
			form =Problem()
		
			return redirect('studteach:problem')


#def Comment(request, pk):
    #prob = get_object_or_404(Problem1, pk=pk)
 #   prob =Problem1.objects.get(pk=pk)
  #  if request.method == "POST":
   #     form = CommentForm(request.POST)
    #    if form.is_valid():
     #       comment = form.save(commit=False)
      #      comment.prob = prob
       #     comment.save()
        #    form = CommentForm()
         #   return redirect('home:prob_detail', pk=prob.pk)
   # else:
    #    form = CommentForm()
    #return render(request, 'home/prob_detail.html', {'form': form})
class Prob_detail(TemplateView):
	template_name = 'studteach/prob_detail.html'
	
	

	def get(self,request,pk):
		prob =Problem1.objects.get(pk=pk)
		form = CommentForm()
		#compls = Complaint.objects.all().order_by('-created')
		args = {'form':form,'prob':prob}
		return render(request, self.template_name ,args)

	def post(self,request,pk):
		form = CommentForm(request.POST)
		prob =Problem1.objects.get(pk=pk)
		if form.is_valid():
			comment = form.save(commit=False)
			comment.prob = prob
			comment.save()


			#text = form.cleaned_data['compl']
			form = CommentForm()
		
			return redirect('studteach:problem')



