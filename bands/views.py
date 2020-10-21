from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
# from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Band
from .serializers.common import BandSerializer

class BandListView(APIView):

    def get(self, _request):
        band_list = Band.objects.all()
        serialized_band_list = BandSerializer(band_list, many=True)
        return Response(serialized_band_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        band_to_create = BandSerializer(data=request.data)
        if band_to_create.is_valid():
            band_to_create.save()
            return Response(band_to_create.data, status=status.HTTP_201_CREATED)
        return Response(band_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class BandDetailView(APIView):

    def get_band(self, pk):
        try:
            return Band.objects.get(pk=pk)
        except Band.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        band = self.get_band(pk=pk)
        serialized_band = BandSerializer(band)
        return Response(serialized_band.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        band_to_update = self.get_band(pk=pk)
        updated_band = BandSerializer(band_to_update, data=request.data)
        if updated_band.is_valid():
            updated_band.save()
            return Response(updated_band.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_band.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    def delete(self, _request, pk):
        band_to_delete = self.get_band(pk=pk)
        band_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
