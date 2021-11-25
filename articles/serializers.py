from rest_framework import serializers
from utils.translate import get_translatable_fields_source
from .models import Article



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'