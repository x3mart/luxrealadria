from modeltranslation.translator import register, TranslationOptions

from articles.models import Article


@register(Article)
class ArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'body')