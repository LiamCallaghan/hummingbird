# pylint: disable=import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from chat.serializers.common import ChatSerializer
from ..serializers.common import BandSerializer
from genres.serializers.common import GenreSerializer

class PopulatedBandSerializer(BandSerializer):
    owner = NestedUserSerializer()
    chats = ChatSerializer(many=True)
    genre = GenreSerializer(many=True)
