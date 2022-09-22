from flask import Flask, request, make_response
from business.diceware.classes.phrases import Phrases
from business.diceware.parse_wordlist import from_file as parse_wordlist_from_file
from helpers import get_wordlists

app = Flask(__name__)
WORDLIST_DIR = "business/wordlists/"


@app.route("/", methods=["GET"])
def api():
    kwargs = {
        "wordlist": "eff_short_wordlist_1.txt",
        "word_count": 6,
        "separator": " ",
        "phrase_count": 1
    }
    wordlist_name = kwargs["wordlist"]
    wordlist_files = get_wordlists(WORDLIST_DIR)
    q = request.args
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
        return """Bad request. Check your query paramaters. Valid query paramaters are: wordlist=(wordlist name), phrase_count=(integer), word_count=(integer), separator=(character)."""

    kwargs["wordlist"] = parse_wordlist_from_file(
        WORDLIST_DIR + wordlist_name)
    phrases = Phrases(**kwargs).as_dict()
    phrases["wordlist"] = wordlist_name

    response = make_response({
        "query": q,
        "wordlists_available": wordlist_files,
        "phrases": phrases
    })
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response
