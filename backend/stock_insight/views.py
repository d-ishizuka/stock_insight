from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def stocks(request):
    return JsonResponse({'result': 'ok'})
