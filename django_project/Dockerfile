FROM python:3

# ARG BASE_DIR=django_project

ENV PORT 8000
ENV WORKERS 4

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
RUN python manage.py collectstatic

CMD gunicorn --workers=$WORKERS django_project.wsgi:application

# ------------------

# FROM nginx:alpine

# WORKDIR /etc/nginx/conf.d/

# COPY ../nginx/django_project ./default.conf

# WORKDIR /usr/share/nginx/html

# COPY --from=0 /app/static .