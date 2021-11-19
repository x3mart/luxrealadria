from rest_framework import serializers
from utils.translate import get_translatable_fields_source
from .models import Article



class ArticleSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields = get_translatable_fields_source(self)

    class Meta:
        model = Article
        fields = '__all__'