from modeltranslation.translator import register, TranslationOptions

from properties.models import Category, Purpose, Region, Status, Property, FilterData


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

@register(Property)
class PropertyTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'address')

@register(FilterData)
class FilterDataTranslationOptions(TranslationOptions):
    fields = ('room_title', 'room_any', 'closets_title', 'closets_any', 'categories_title', 'categories_any', 'statuses_title', 'statuses_any', 'purposes_title', 'purposes_any', 'price_range_from', 'price_range_to', 'regions_title', 'regions_any', 'price_range')