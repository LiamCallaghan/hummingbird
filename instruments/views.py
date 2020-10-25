from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.common import InstrumentSerializer
from .models import Instrument

# Create your views here.
class InstrumentListView(APIView):

    def get(self, _request):
        instrument_list = Instrument.objects.all()
        serialized_instrument_list = InstrumentSerializer(instrument_list, many=True)
        return Response(serialized_instrument_list.data, status=status.HTTP_200_OK)
