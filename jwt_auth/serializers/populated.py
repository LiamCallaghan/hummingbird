# pylint: disable=no-name-in-module, import-error
from bands.serializers.populated import PopulatedBandSerializer
from instruments.serializers.common import InstrumentSerializer
from chat.serializers.populated import PopulatedChatSerializer
# from message.serializers.common import MessageSerializer
# from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_band = PopulatedBandSerializer(many=True)
    instrument = InstrumentSerializer(many=True)
    # comments = PopulatedCommentSerializer(many=True)
    sent_chats = PopulatedChatSerializer(many=True)
