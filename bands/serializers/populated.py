# pylint: disable=import-error
from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import BandSerializer

class PopulatedBandSerializer(BandSerializer):
    owner = NestedUserSerializer()
