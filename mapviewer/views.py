from typing import Any
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView

class IndexView(TemplateView):
    template_name = "mapviewer/index.html"

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        # return super().get_context_data(**kwargs)
        return kwargs
