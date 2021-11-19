from modeltranslation.translator import register, TranslationOptions

from images.models import Logo


@register(Logo)
class LogoItemTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle')