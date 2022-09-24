from os import makedirs
from flask import Flask
import api


def create_app(test_config=None, instance_relative_config=True):
    app = Flask(__name__)

    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        makedirs(app.instance_path)
    except OSError:
        pass

    app.register_blueprint(api.bp)
    return app
