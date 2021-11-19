from modeltranslation.translator import register, TranslationOptions

from siteelements.models import LegalInfo, FAQ, Contact, UsefullArticle, PropertyPage, Error404Page, Homepage, MenuItem, SubMenuItem


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
    fields = ('title', 'subtitle', 'footer_text', 'recently_added_title', 'recently_added_subtitle', 'category_title', 'category_subtitle')

@register(MenuItem)
class MenuItemTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(SubMenuItem)
class SubMenuItemTranslationOptions(TranslationOptions):
    fields = ('title',)