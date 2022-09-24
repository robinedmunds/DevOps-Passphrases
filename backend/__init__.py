import os
from flask import Flask


def create_app(test_config=None, instance_relative_config=True):
    app = Flask(__name__)

    # if test_config is None:
    #     app.config.from_pyfile("config.py", silent=True)
    # else:
    #     app.config.from_mappings(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    return app
