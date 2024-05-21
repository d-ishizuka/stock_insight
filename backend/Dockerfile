FROM python:3.12-bullseye

# docker-compose.ymlで指定したenvironment_nameを設定
ARG evironment_name
ENV evironment_name=$environment_name

WORKDIR /backend

# マウントしているのにファイルがないとエラーになるので、一旦ファイルをコピー
COPY . /backend

RUN pip install -r requirements.lock

# Djangoを起動
ENTRYPOINT python manage.py runserver 0.0.0.0:8000 --settings=config.settings.development