from django.urls import path
from .views import RegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "users"
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # لاگین و گرفتن توکن
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # رفرش توکن
]


