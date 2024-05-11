from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
      'ENGINE': 'django.db.backends.mysql',
      'NAME': 'stockMillionaire',
      'USER': 'user',
      'PASSWORD': 'password',
      'HOST': 'db',
      'PORT': '3310',
    }
}