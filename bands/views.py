from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Band
from .serializers.common import BandSerializer

class BandListView(APIView):

    def get(self, _request):
        band_list = Band.objects.all()
        serialized_band_list = BandSerializer(band_list, many=True)
        return Response(serialized_band_list.data, status=status.HTTP_200_OK)
