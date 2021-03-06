# pylint: disable=import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from bands.serializers.common import BandSerializer
from message.serializers.common import MessageSerializer
from ..serializers.common import ChatSerializer

class PopulatedChatSerializer(ChatSerializer):
    sender = NestedUserSerializer()
    related_band = BandSerializer()
    messages = MessageSerializer(many=True)
