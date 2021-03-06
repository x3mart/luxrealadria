from modeltranslation.translator import register, TranslationOptions

from siteelements.models import Feature, LegalInfo, FAQ, Contact, MobileMenu, UsefullArticle, PropertyPage, Error404Page, Homepage, MenuItem, SubMenuItem


@register(LegalInfo)
class LegalInfoTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(FAQ)
class FAQTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle', 'call_us_title', 'call_us_text', 'call_us_button')

@register(Contact)
class ContactTranslationOptions(TranslationOptions):
    fields = ('title', 'text', 'address_basic', 'address_additional')

@register(UsefullArticle)
class UsefullArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(PropertyPage)
class PropertyPageTranslationOptions(TranslationOptions):
    fields = ('title', 'text', 'more_button', 'filter_title', 'new_property_title', 'property_description_title', 'features_title', 'video_title')

@register(Error404Page)
class Error404PageTranslationOptions(TranslationOptions):
    fields = ('title', 'text',)

@register(Homepage)
class HomepageTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle', 'footer_text', 'recently_added_title', 'recently_added_subtitle', 'category_title', 'category_subtitle', 'trend_title', 'trend_subtitle', 'login', 'search_button')

@register(MenuItem)
class MenuItemTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(SubMenuItem)
class SubMenuItemTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Feature)
class FeatureTranslationOptions(TranslationOptions):
    fields = ('type_title', 'area_title', 'property_id_title', 'bathroom_title', 'bedroom_iitle', 'region_title',)


@register(MobileMenu)
class MobileMenuTranslationOptions(TranslationOptions):
    fields = ('menu_title', 'social_title', 'messenger_title')