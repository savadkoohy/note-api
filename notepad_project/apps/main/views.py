from django.shortcuts import render

#-------------------------------------
def home(request):
    context = {'message': 'سلام!'}
    return render(request, 'index.html', context)