from django.shortcuts import redirect


def login_redirect(request):
    #return redirect('/pehla1/login') 
    return redirect('studteach:login') 