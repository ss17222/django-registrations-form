# Generated by Django 3.0.8 on 2020-07-06 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registrationform',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Firstname', models.CharField(max_length=200)),
                ('Lastname', models.CharField(max_length=200)),
                ('Email', models.CharField(max_length=200)),
                ('DOB', models.CharField(max_length=200)),
                ('Gender', models.CharField(max_length=200)),
                ('Hobby', models.TextField()),
                ('Phone', models.CharField(max_length=13)),
                ('Password', models.CharField(max_length=200)),
                ('CPassword', models.CharField(max_length=200)),
            ],
        ),
    ]
