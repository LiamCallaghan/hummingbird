# pylint: disable=import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from chat.serializers.populated import PopulatedChatSerializer
from ..serializers.common import MessageSerializer

class PopulatedMessageSerializer(MessageSerializer):
    sent_by = NestedUserSerializer()
    related_to = PopulatedChatSerializer()
