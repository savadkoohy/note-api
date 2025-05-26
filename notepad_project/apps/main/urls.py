from django.urls import path
from .views import home
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "main"
urlpatterns = [
    path('', home, name='home'),
]

