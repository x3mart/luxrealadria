from modeltranslation.manager import get_translatable_fields_for_model
from django.utils.translation import get_language
from rest_framework import serializers


def get_translatable_fields_source(self):
    for field in get_translatable_fields_for_model(self.Meta.model):
        language = get_language()
        self.fields[field] = serializers.CharField(required=False, source=f"{field}_{language}")
    return self.fields