# pylint: disable=import-error
from jwt_auth.serializers.populated import PopulatedUserSerializer
from chat.serializers.populated import PopulatedChatSerializer
from ..serializers.common import MessageSerializer

class PopulatedMessageSerializer(MessageSerializer):
    sent_by = PopulatedUserSerializer()
    related_to = PopulatedChatSerializer()
