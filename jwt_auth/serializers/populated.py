# pylint: disable=no-name-in-module, import-error
from bands.serializers.common import BandSerializer
from ..serializers.common import UserSerializer

class PopulatedUserSerializer(UserSerializer):

    created_band = BandSerializer(many=True)
