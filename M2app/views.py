from django.shortcuts import render,get_object_or_404,HttpResponseRedirect
from django.http import HttpResponse
from django.template import loader

from M2app.models import Registrationform, loginform
from M2app.forms import User_reg, User_login

# Create your views here.

def registration(request):
    if request.method == 'POST':
        form = User_reg(request.POST or None)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('login/')

    return render(request,'registration.html')

# def login(request):
#     if request.method == 'POST':
#         form = User_login(request.POST or None)
#         if form.is_valid():
#             Email = request.POST.get('Email')
#             data = Registrationform.objects.get(Email = Email)
#             id = str(data.id)
#             # obj.save()
#             return HttpResponseRedirect('/login/'+id)
#
#     return render(request,'login.html')

def login(request):
    if request.method == 'POST':
        form = User_login(request.POST or None)
        if form.is_valid():
            Email = request.POST.get('Email')
            Password = request.POST.get('Password')

            data = Registrationform.objects.get(Email = Email)

            id = str(data.id)
            mail = str(data.Email)
            pas = str(data.Password)
            if mail==Email and pas==Password:
                return HttpResponseRedirect('/login/'+id)
            else:
                return render(request,'failure.html')

    return render(request,'login.html')

def detail(request, id):
    context = {}
    context['data'] = Registrationform.objects.get(id = id)
    return render(request,'logindetail.html',context)

def update(request, id):
    context = {}
    context['data'] = Registrationform.objects.get(id = id)
    if request.method == 'POST':
        obj = get_object_or_404(Registrationform,id=id)
        form = User_reg(request.POST or None, instance=obj)
        if form.is_valid():
            form.save()
            return render(request,'success.html')

    return render(request,'update.html',context)

def forgot(request):
    if request.method == 'POST':
        Email = request.POST.get('Email')
        Password = request.POST.get('Password')
        CPassword = request.POST.get('CPassword')

        data = Registrationform.objects.get(Email = Email)
        id = str(data.id)
        mail = str(data.Email)

        if mail==Email:
            Reg = Registrationform.objects.get(id=id)
            Reg.Email = Email
            Reg.Password = Password
            Reg.CPassword = CPassword
            Reg.save()
            return render(request,'success.html')
        # else:
        #     return render(request,'failure.html')

    return render(request,'fgt_password.html')
