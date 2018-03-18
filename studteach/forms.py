from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from studteach.models import Document,Problem1,Comment


class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required=True)
	first_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
	last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
	city = forms.CharField(max_length=100, required=False, help_text='Optional.')

	class Meta:
		model = User
		fields = (
			'username',
			'first_name',
			'last_name',
			'email',
			'city',
			'password1',
			'password2'
			)
#
		
	def save(self, commit=True):
		user = super(RegistrationForm, self).save(commit=False)
		user.first_name = self.cleaned_data['first_name']
		user.last_name = self.cleaned_data['last_name']
		user.email = self.cleaned_data['email']
		user.city = self.cleaned_data['city']


		if commit:
			user.save()

		return user.username


class DocumentForm(forms.ModelForm):
    class Meta:
        model = Document
        fields = ('description', 'document', )




class Problem(forms.ModelForm):
	

	class Meta:
		model = Problem1
		fields = (
			'probl',
			)


class CommentForm(forms.ModelForm):

	class Meta:
		model = Comment
		fields = ( 'text',)
