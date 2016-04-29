from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.core.urlresolvers import reverse

class mainView(TemplateView):
	template_name = "me/main.html"
