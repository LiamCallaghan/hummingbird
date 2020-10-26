from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status
# from rest_framework.permissions import IsAuthenticated

from .serializers.common import MessageSerializer
from .serializers.populated import PopulatedMessageSerializer
from .models import Message

class MessageListView(APIView):

    # permission_classes = (IsAuthenticated, )

    def get(self, _request):
        message_list = Message.objects.all()
        serialized_message_list = PopulatedMessageSerializer(message_list, many=True)
        return Response(serialized_message_list.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['sent_by'] = request.user.id
        message_to_create = MessageSerializer(data=request.data)
        if message_to_create.is_valid():
            message_to_create.save()
            return Response(message_to_create.data, status=status.HTTP_201_CREATED)
        return Response(message_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class MessageDetailView(APIView):

    # permission_classes = (IsAuthenticated, )

    def get_message(self, pk):
        try:
            return Message.objects.get(pk=pk)
        except Message.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        message = self.get_message(pk=pk)
        serialized_message = PopulatedMessageSerializer(message)
        return Response(serialized_message.data, status=status.HTTP_200_OK)
