from modeltranslation.translator import register, TranslationOptions

from siteelements.models import LegalInfo, FAQ, Contact, UsefullArticle, PropertyPage, Error404Page, Homepage


@register(LegalInfo)
class LegalInfoTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(FAQ)
class FAQTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle',)

@register(Contact)
class ContactTranslationOptions(TranslationOptions):
    fields = ('title', 'text', 'address_basic', 'address_additional')

@register(UsefullArticle)
class UsefullArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(PropertyPage)
class PropertyPageTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(Error404Page)
class Error404PageTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(Homepage)
class HomepageTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle', 'footer_text')