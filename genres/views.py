from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.common import GenreSerializer
from .models import Genre

# Create your views here.
class GenreListView(APIView):

    def get(self, _request):
        genre_list = Genre.objects.all()
        serialized_genre_list = GenreSerializer(genre_list, many=True)
        return Response(serialized_genre_list.data, status=status.HTTP_200_OK)
