from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from articles.models import Article
from articles.paginations import ArticlePagination
from articles.serializers import ArticleSerializer

# Create your views here.
class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [AllowAny]
    pagination_class = ArticlePagination
