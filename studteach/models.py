from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

#class UserProfileManager(models.Manager):
#	def get_queryset(self):
#		return super(UserProfileManager,self).get_queryset().filter(city='London')

# Create your models here.

class UserProfile(models.Model):
	user = models.OneToOneField(User,on_delete=models.DO_NOTHING, related_name='user1')
	#user = models.ForeignKey(User,on_delete=models.CASCADE,)
	description = models.CharField(max_length=100,default='')#, blank=True)
	city =models.CharField(max_length=100, default='', blank=True)
	#website = models.URLField(default='', blank=True)
	phone = models.IntegerField(default=0, blank=True)
	attendance = models.IntegerField(default=0, blank=True)
	is_student = models.BooleanField(default=False)
	is_teacher = models.BooleanField(default=False)


	#adharno = models.IntegerField(default=0, blank=True)
	#panno = models.IntegerField(default=0, blank=True)
	#name = models.CharField(max_length=100, default='', blank=True)
	#address = models.CharField(max_length=100,default='', blank=True)
	#image = models.ImageField(upload_to='profile_image/',blank=True)
	#age = models.IntegerField(default=0, blank=True)
	#dateofbirth = models.CharField(max_length=100,default='', blank=True)
def create_profile(sender, **kwargs):
	if kwargs['created']:
		user_profile = UserProfile.objects.create(user=kwargs['instance'])

post_save.connect(create_profile, sender=User)

class Document(models.Model):
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)



class Problem1(models.Model):
	probl = models.CharField(max_length=500)
	user = models.ForeignKey(User,on_delete=models.CASCADE,)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)


class Comment(models.Model):
	prob = models.ForeignKey(Problem1, related_name='comments',on_delete=models.CASCADE,)
	author = models.CharField(max_length=200)
	text = models.TextField()
	created_date = models.DateTimeField(auto_now_add=True)
	approved_comment = models.BooleanField(default=False)
	def approve(self):
		self.approved_comment = True
		self.save()
	def approved_comments(self):
		return self.comments.filter(approved_comment=True)
	def __str__(self):
		return self.text
