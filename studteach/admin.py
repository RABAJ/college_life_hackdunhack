from django.contrib import admin
from studteach.models import UserProfile,Document

# Register your models here.

class UserProfileAdmin(admin.ModelAdmin):
	#list_display = {'user','city','website'}

	def user_info(self,obj):
		return obj.description

	def get_queryset(self,request):
		queryset = super(UserProfileAdmin, self).get_queryset(request)
		queryset = queryset.order_by('-phone','user')
		return queryset

	user_info.short_description = 'Info'

admin.site.register(UserProfile,UserProfileAdmin)
admin.site.register(Document)