from http import HTTPStatus
from random import choice
from backend.api import WORDLIST_FILES as WORDLIST_FILE_NAMES
from ..validator import is_validated_api_json_response

DEFAULT_QUERY = {
    "phrase_count": 1,
    "word_count": 1,
    "separator": ",",
    "wordlist": choice(WORDLIST_FILE_NAMES)
}

# headers


def test_cors_is_permissive(client):
    response = client.get("/")
    assert response.headers["Access-Control-Allow-Origin"] == "*"


def test_content_type_is_json(client):
    response = client.get("/")
    assert response.headers["Content-Type"] == "application/json"


# status codes


def test_status_code_is_ok_on_get_root_with_no_query(client):
    response = client.get("/")
    assert response.status_code == HTTPStatus.OK


def test_status_code_is_bad_request_with_invalid_query(client):
    response = client.get("/", query_string={"foo": "bar"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_code_is_ok_with_valid_word_count(client):
    response = client.get("/", query_string={"word_count": "7"})
    assert response.status_code == HTTPStatus.OK


def test_status_code_is_ok_with_valid_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "9"})
    assert response.status_code == HTTPStatus.OK


def test_status_code_is_ok_with_valid_separator(client):
    response = client.get("/", query_string={"separator": "#"})
    assert response.status_code == HTTPStatus.OK


def test_status_code_is_bad_request_with_too_long_separator(client):
    response = client.get("/", query_string={"separator": "###"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_code_is_ok_with_valid_wordlist(client):
    response = client.get("/", query_string={"wordlist": "reinhold.txt"})
    assert response.status_code == HTTPStatus.OK


def test_status_code_is_bad_request_with_invalid_wordlist(client):
    response = client.get("/", query_string={"wordlist": "foo"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_is_method_not_allowed_with_post_method(client):
    response = client.post("/")
    assert response.status_code == HTTPStatus.METHOD_NOT_ALLOWED


def test_status_is_method_not_allowed_with_put_method(client):
    response = client.put("/")
    assert response.status_code == HTTPStatus.METHOD_NOT_ALLOWED


def test_status_is_method_not_allowed_with_delete_method(client):
    response = client.delete("/")
    assert response.status_code == HTTPStatus.METHOD_NOT_ALLOWED


def test_status_code_is_bad_request_with_very_high_word_count(client):
    response = client.get("/", query_string={"word_count": "9999"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_code_is_bad_request_with_negative_word_count(client):
    response = client.get("/", query_string={"word_count": "-9"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_code_is_bad_request_with_very_high_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "9999"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_status_code_is_bad_request_with_negative_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "-9"})
    assert response.status_code == HTTPStatus.BAD_REQUEST


# validate json response


def test_response_is_validated_json(client):
    response = client.get("/")
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_zero_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "0"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_max_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "50"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_one_word_count(client):
    response = client.get("/", query_string={"word_count": "1"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_max_word_count(client):
    response = client.get("/", query_string={"word_count": "30"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_space_separator(client):
    response = client.get("/", query_string={"separator": " "})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_hash_separator(client):
    response = client.get("/", query_string={"separator": "#"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_fullstop_separator(client):
    response = client.get("/", query_string={"separator": "."})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_comma_separator(client):
    response = client.get("/", query_string={"separator": ","})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_underscore_separator(client):
    response = client.get("/", query_string={"separator": "_"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_hyphen_separator(client):
    response = client.get("/", query_string={"separator": "-"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_colon_separator(client):
    response = client.get("/", query_string={"separator": ":"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_semicolon_separator(client):
    response = client.get("/", query_string={"separator": ";"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_digit_separator(client):
    response = client.get("/", query_string={"separator": "3"})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_different_wordlist_1(client):
    response = client.get(
        "/", query_string={"wordlist": WORDLIST_FILE_NAMES[0]})
    assert is_validated_api_json_response(response.json) is True


def test_response_is_validated_json_different_wordlist_2(client):
    response = client.get(
        "/", query_string={"wordlist": WORDLIST_FILE_NAMES[1]})
    assert is_validated_api_json_response(response.json) is True


# query have expected affect


def test_response_query_matches_request_query_word_count(client):
    response = client.get("/", query_string={"word_count": "7"})
    assert response.json["query"]["word_count"] == 7


def test_response_query_matches_request_query_phrase_count(client):
    response = client.get("/", query_string={"phrase_count": "9"})
    assert response.json["query"]["phrase_count"] == 9


def test_response_query_matches_request_query_separator(client):
    response = client.get("/", query_string={"separator": "p"})
    assert response.json["query"]["separator"] == "p"


def test_response_query_matches_request_query_wordlist(client):
    wordlist = choice(WORDLIST_FILE_NAMES)
    response = client.get("/", query_string={"wordlist": wordlist})
    assert response.json["query"]["wordlist"] == wordlist


def test_response_phrase_count_matches_request(client):
    response = client.get("/", query_string={"phrase_count": 9})
    assert response.json["phrases"]["phrase_count"] == 9


def test_response_phrases_length_matches_request(client):
    query = DEFAULT_QUERY.copy()
    query["phrase_count"] = 3
    response = client.get("/", query_string=query)
    assert len(response.json["phrases"]["phrases"]) == 3


def test_response_word_count_matches_request(client):
    query = DEFAULT_QUERY.copy()
    query["word_count"] = 7
    response = client.get("/", query_string=query)
    assert response.json["phrases"]["phrases"][0]["word_count"] == 7


def test_response_words_length_matches_request(client):
    query = DEFAULT_QUERY.copy()
    query["word_count"] = 7
    response = client.get("/", query_string=query)
    assert len(response.json["phrases"]["phrases"][0]["words"]) == 7
