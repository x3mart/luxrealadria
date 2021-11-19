from modeltranslation.translator import register, TranslationOptions

from legals.models import LegalInfoItem, FAQItem


@register(LegalInfoItem)
class LegalInfoItemTranslationOptions(TranslationOptions):
    fields = ('title', 'body')

@register(FAQItem)
class FAQItemTranslationOptions(TranslationOptions):
    fields = ('question', 'answer')
