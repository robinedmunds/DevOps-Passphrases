from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from diceware_api.serializers import UserSerializer, GroupSerializer
# normal views
from rest_framework import authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .business.diceware.classes.phrases import Phrases
from .business.diceware.parse_wordlist import from_file as parse_wordlist_from_file


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class BasicDicewareView(APIView):
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]

    def get(self, request, format=None):
        wordlist = parse_wordlist_from_file(
            "diceware_api/business/wordlists/eff_short_wordlist_1.txt")
        kwargs = {
            "wordlist": wordlist,
            "word_count": 6,
            "separator": " ",
            "phrase_count": 10
        }
        phrases = Phrases(**kwargs).as_dict()
        return Response(phrases)
