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
from .helpers import get_wordlists

WORDLIST_DIR = "diceware_api/business/wordlists/"


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


class DicewarePassphrasesView(APIView):
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]
    def get(self, request, format=None):
        kwargs = {
            "wordlist": "eff_short_wordlist_1.txt",
            "word_count": 6,
            "separator": " ",
            "phrase_count": 1
        }
        wordlist_name = kwargs["wordlist"]
        wordlist_files = get_wordlists(WORDLIST_DIR)
        q = request.query_params
        try:
            if "word_count" in q:
                value = abs(int(q["word_count"]))
                if value > 30:
                    value = 30
                kwargs["word_count"] = value
            if "phrase_count" in q:
                value = abs(int(q["phrase_count"]))
                if value > 50:
                    value = 50
                kwargs["phrase_count"] = value
            if "separator" in q:
                kwargs["separator"] = q["separator"][0]
            if "wordlist" in q:
                if q["wordlist"] not in wordlist_files:
                    raise Exception
                wordlist_name = q["wordlist"]
        except Exception:
            return Response("Bad request. Check your query paramaters. Valid query paramaters are: wordlist=(wordlist name), phrase_count=(integer), word_count=(integer), separator=(character).", status=400)

        kwargs["wordlist"] = parse_wordlist_from_file(
            WORDLIST_DIR + wordlist_name)
        phrases = Phrases(**kwargs).as_dict()
        phrases["wordlist"] = wordlist_name
        return Response({
            "query": request.query_params,
            "wordlists_available": wordlist_files,
            "phrases": phrases
        })
