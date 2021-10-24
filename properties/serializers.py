from rest_framework import serializers

from properties.models import Category


class CategorySerializer(serializers.ModelSerializer):
    properties_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Category
        fields = '__all__'
