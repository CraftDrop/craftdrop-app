from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from .models import User, Order, Address, Artists, Artwork
from .forms import MyUserCreationForm


posts = [
    {
        'author':'Lucas Bolt',
        'title': 'King of Africa',
        'date': 'Future'
    },
    {
        'author': "Lucas Bolt",
        'title': 'Africa is free again',
        'date': 'Future'
    }
]

def home(request):
    context = {'posts':posts}
    return render(request, 'myapp/home.html', context)

def about(request):
    return render(request, 'myapp/about.html')

def loginPage(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == 'POST':
        email = request.POST.get('email').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(email=email)
        except:
            messages.error(request, 'User does not exist!')
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Incorrect password or username')
    context = {'page':page}
    return render(request, 'myapp/login.html', context)

def logoutPage(request):
    logout(request)
    return redirect('login')

def registerPage(request):
    form = MyUserCreationForm()
    if request.method == 'POST':
        form = MyUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occured during registeration')
    return render(request, 'myapp/login.html', {'form':form})