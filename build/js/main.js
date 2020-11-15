// Табы
$(document).ready(function() {
	if ($(window).width() < 767) {
		$('.tabs-nav__mobile-select').on('click', function() {
			$(this).hide();
			$(this).parents('.tabs-nav').find('.tabs-nav__list').addClass('tabs-nav__list_open');
			$('.tabs-nav__item').slideDown();
		});
	}

	$('.tabs-nav__button').on('click', function() {
		let activeTab = $(this).parents('.tabs-nav__item');
		let activeTabName = activeTab.data('tabnav');
		let activeContent = $('.tabs__item_' + activeTabName);

		// Снимаем класс у навигации и добавляем на активный
		$('.tabs-nav__item').removeClass('tabs-nav__item_active');
		activeTab.addClass('tabs-nav__item_active');

		// Скрываем контент для всех кроме активного
		if (activeContent.is(':hidden')) {
			$('.tabs__item').hide();
			activeContent.fadeIn('slow');
		}

		if ($(window).width() < 767) {
			$('.tabs-nav__item').hide();
			activeTab.show();
			activeTab.parent().prepend(activeTab);
			$(this).parents('.tabs-nav').find('.tabs-nav__list').removeClass('tabs-nav__list_open');
			$('.tabs-nav__mobile-select').show();
		}
	});
});

// Аккордион 
$(document).ready(function() {
	$('.accordion-list__toggle').on('click', function() {
		let accordionItem = $(this).parent('.accordion-list__item');
		let accordionContent = accordionItem.children('.accordion-list__content');

		accordionItem.toggleClass('accordion-list__item_active');
		accordionContent.slideToggle('slow');
	});

	// Кнопка закрытия
	$('.questions__close').on('click', function() {
		let accordionItem = $(this).parent('.accordion-list__item');
		let accordionContent = accordionItem.children('.accordion-list__content');

		accordionItem.removeClass('accordion-list__item_active');
		accordionContent.slideUp('slow');
	});
});

// Полезная информация
$(document).ready(function() {
	$('.questions__answer').on('click', function() {
		$(this).parents('.questions__ask').hide();
		$(this).parents('.questions__footer').find('.questions__success').fadeIn('slow');
	});
});