from http import HTTPStatus
from .. import create_app


def test_config():
    assert not create_app().testing
    assert create_app({"TESTING": True}).testing


def test_response_is_OK(client):
    response = client.get("/")
    assert response.status_code == HTTPStatus.OK
