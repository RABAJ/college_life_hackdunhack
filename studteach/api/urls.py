from django.conf.urls import url
from .views import DocumentView

urlpatterns=[
	url(r'^document/$' , DocumentView.as_view()),
  ]