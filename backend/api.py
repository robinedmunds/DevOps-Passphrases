from http import HTTPStatus
from flask import Flask, request, make_response
from cerberus import Validator
from business.diceware.classes.phrases import Phrases
from business.diceware.parse_wordlist import from_file as parse_wordlist_file
from helpers import get_wordlists

app = Flask(__name__)

WORDLIST_DIR = "business/wordlists/"
WORDLIST_FILES = get_wordlists(WORDLIST_DIR)
QUERY_SCHEMA = {
    "wordlist": {"type": "string", "default": "eff_short_wordlist_1.txt"},
    "word_count": {
        "type": "integer", "min": 1, "max": 30, "coerce": int, "default": 4},
    "separator": {
        "type": "string", "minlength": 1, "maxlength": 1, "default": " "},
    "phrase_count": {
        "type": "integer", "min": 0, "max": 50, "coerce": int, "default": 1},
}


@app.route("/", methods=["GET"])
def api():
    query = dict(request.args)
    validator = Validator()
    if validator(query, QUERY_SCHEMA) is False:
        return make_response(
            """Bad request. Check your query parameters. Valid query parameters
                are: wordlist=(wordlist name), phrase_count=(integer),
                word_count=(integer), separator=(character).""",
            HTTPStatus.BAD_REQUEST
        )

    # generate passphrases
    kwargs = validator.document.copy()
    kwargs["wordlist"] = parse_wordlist_file(
        WORDLIST_DIR + kwargs["wordlist"])
    phrases = Phrases(**kwargs).as_dict()

    response = make_response({
        "query": validator.document,
        "wordlists_available": WORDLIST_FILES,
        "phrases": phrases
    }, HTTPStatus.OK)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response
