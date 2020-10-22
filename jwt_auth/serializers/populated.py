# pylint: disable=no-name-in-module, import-error
from bands.serializers.common import BandSerializer
from instruments.serializers.common import InstrumentSerializer
# from chat.serializers.common import ChatSerializer
# from message.serializers.common import MessageSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_band = BandSerializer(many=True)
    instruments = InstrumentSerializer(many=True)
    comments = PopulatedCommentSerializer(many=True)
    # chats = ChatSerializer
