from modeltranslation.translator import register, TranslationOptions

from properties.models import Category, Purpose, Region, Status, Feature, Property


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Purpose)
class PurposeTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Region)
class RegionTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Status)
class StatusTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Feature)
class FeatureTranslationOptions(TranslationOptions):
    fields = ('title',)

@register(Property)
class PropertyTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'address')