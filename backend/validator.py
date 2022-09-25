from cerberus import Validator
from api import WORDLIST_FILES as WORDLIST_FILE_NAMES


validator = Validator()

word_schema = {
    "word": {"type": "string"},
    "word_list_key": {"type": "integer"}
}

phrase_schema = {
    "phrase": {"type": "string"},
    "separator": {"type": "string", "maxlength": 1},
    "word_count": {"type": "integer", "min": 1, "max": 30},
    "words": {"type": "list", "schema": {
        "type": "dict", "schema": word_schema}},
}

phrases_schema = {
    "phrase_count": {"type": "integer", "min": 0, "max": 50},
    "phrases": {"type": "list", "schema": {
        "type": "dict", "schema": phrase_schema}},
    "separator": {"type": "string", "maxlength": 1},
    "word_count": {"type": "integer", "min": 1, "max": 30}
}

query_schema = {
    "phrase_count": {"type": "integer", "min": 0, "max": 50},
    "word_count": {"type": "integer", "min": 1, "max": 30},
    "separator": {"type": "string", "maxlength": 1},
    "wordlist": {"type": "string", "allowed": WORDLIST_FILE_NAMES}
}

root_schema = {
    "phrases": {"type": "dict", "schema": phrases_schema},
    "query": {"type": "dict", "schema": query_schema},
    "wordlists_available": {"type": "list", "contains": WORDLIST_FILE_NAMES},
}


def is_validated_api_json_response(document, schema=root_schema):
    return validator.validate(document, schema)


print(validator.validate({
    "phrases": {
      "phrase_count": 1,
      "phrases": [
          {
              "phrase": "photo.slit",
              "separator": ".",
              "word_count": 2,
              "words": [
                  {
                      "word": "photo",
                      "word_list_key": 4433
                  },
                  {
                      "word": "slit",
                      "word_list_key": 5513
                  }
              ]
          }
      ],
      "separator": ".",
      "word_count": 2
      },
    "query": {
        "phrase_count": 1,
        "separator": ".",
        "word_count": 2,
        "wordlist": "eff_short_wordlist_1.txt"
    },
    "wordlists_available": [
        "reinhold.txt",
        "eff_short_wordlist_2_0.txt",
        "eff_short_wordlist_1.txt",
        "eff_large_wordlist.txt"
    ]
}, root_schema))
