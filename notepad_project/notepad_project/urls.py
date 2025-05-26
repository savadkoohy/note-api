from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include("apps.main.urls", namespace= "main")),
    path('api/',include("apps.notes.urls", namespace= "notes")),
    path('api/auth/',include("apps.users.urls", namespace= "users")),
   
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)