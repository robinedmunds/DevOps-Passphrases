from http import HTTPStatus
from flask import Flask, request, make_response
from business.diceware.classes.phrases import Phrases
from business.diceware.parse_wordlist import from_file as parse_wordlist_from_file
from helpers import get_wordlists

app = Flask(__name__)
WORDLIST_FILES = get_wordlists("business/wordlists/")
DEFAULT_OPTS = {
    "wordlist": "eff_short_wordlist_1.txt",
    "word_count": 6,
    "separator": " ",
    "phrase_count": 1
}
MAX_WORDS = 30
MAX_PHRASES = 50


def parse_query(query):
    options = DEFAULT_OPTS
    query_keys = query.keys()
    try:
        # parse
        if "word_count" in query_keys:
            options["word_count"] = abs(int(query["word_count"]))
        if "phrase_count" in query_keys:
            options["phrase_count"] = abs(int(query["phrase_count"]))
        if "separator" in query_keys:
            options["separator"] = query["separator"][0]
        if "wordlist" in query_keys:
            options["wordlist"] = query["wordlist"]

        # validate
        if options["word_count"] > MAX_WORDS:
            options["word_count"] = MAX_WORDS
        if options["word_count"] < 1:
            raise Exception
        if options["phrase_count"] > MAX_PHRASES:
            options["phrase_count"] = MAX_PHRASES
        if options["wordlist"] not in WORDLIST_FILES:
            raise Exception
        for k in query_keys:
            if k not in DEFAULT_OPTS.keys():
                raise Exception

    except Exception:
        return
    return options


@app.route("/", methods=["GET"])
def api():
    options = parse_query(request.args)

    if options is None:
        return make_response(
            """Bad request. Check your query parameters. Valid query parameters
                are: wordlist=(wordlist name), phrase_count=(integer),
                word_count=(integer), separator=(character).""",
            HTTPStatus.BAD_REQUEST
        )

    kwargs = options.copy()
    kwargs["wordlist"] = parse_wordlist_from_file(
        "business/wordlists/" + options["wordlist"])
    phrases = Phrases(**kwargs).as_dict()

    response = make_response({
        "query": options,
        "wordlists_available": WORDLIST_FILES,
        "phrases": phrases
    }, HTTPStatus.OK)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response
