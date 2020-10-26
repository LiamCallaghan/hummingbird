from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers.common import ChatSerializer
from .serializers.populated import PopulatedChatSerializer
from .models import Chat

class ChatListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['sender'] = request.user.id
        chat_to_create = ChatSerializer(data=request.data)
        if chat_to_create.is_valid():
            chat_to_create.save()
            return Response(chat_to_create.data, status=status.HTTP_201_CREATED)
        return Response(chat_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, _request):
        chat_list = Chat.objects.all()
        serialized_chat_list = PopulatedChatSerializer(chat_list, many=True)
        return Response(serialized_chat_list.data, status=status.HTTP_200_OK)

class ChatDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get_chat(self, pk):
        try:
            return Chat.objects.get(pk=pk)
        except Chat.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        chat = self.get_chat(pk=pk)
        serialized_chat = PopulatedChatSerializer(chat)
        return Response(serialized_chat.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        chat_to_delete = self.get_chat(pk=pk)
        chat_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
