from django.conf.urls import url,include
from . import views
from django.contrib.auth.views import login,logout,password_reset,password_reset_done,password_reset_confirm,password_reset_complete
#from pehla.views import createaadhar,createpan,showaadhar,showpan
from studteach.views import Attendance,attendance_view,model_form_upload,MyResources,login1,register,Problem2,Prob_detail

app_name="studteach"

urlpatterns=[
	#url(r'^$',views.home),
	url(r'^login/$',login,{'template_name': 'studteach/login.html'},name='login'),
	url(r'^logout/$',logout,{'template_name': 'studteach/logout.html'},name='logout'),
	url(r'^register/$', views.register, name='register'),
	url(r'^login1/$', views.login1, name='login1'),
	url(r'^profile/$', views.profile, name='profile'),
	url(r'^profile/(?P<pk>\d+)/$', views.profile, name='profile_with_pk'),
	url(r'^attendance/$', Attendance.as_view(), name='attendance'),
	url(r'^attendance_view/(?P<id>\d+)/$', views.attendance_view, name='attendance_view'),
	url(r'^files/$', views.model_form_upload, name='file_upload'),
	url(r'^myresources/$', MyResources.as_view(), name='myresources'),
	url(r'^api/', include('studteach.api.urls')),
	url(r'^problem/$', Problem2.as_view(), name='problem'),
	url(r'^prob/(?P<pk>\d+)/$', Prob_detail.as_view(), name='prob_detail'),

  ]