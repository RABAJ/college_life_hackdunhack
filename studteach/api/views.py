from .serializers import DocumentSerializer
from studteach.models import Document
from rest_framework import generics



class DocumentView(generics.ListAPIView):
	queryset = Document.objects.all()
	serializer_class = DocumentSerializer
