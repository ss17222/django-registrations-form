from django import forms
from M2app.models import Registrationform, loginform

class User_reg(forms.ModelForm):
    class Meta:
        model = Registrationform
        fields = [
            "Firstname",
            "Lastname",
            "Email",
            "DOB",
            "Gender",
            "Hobby",
            "Phone",
            "Password",
            "CPassword",
        ]

class User_login(forms.ModelForm):
    class Meta:
        model = loginform
        fields = [
        "Email",
        "Password",
        ]
