# Animator

1. Копируем к себе репозиторий.  
  1.1. Справа вверху зелёная кнопка **Code**, кликаем.  
  1.2. В открывшемся меню выбираем Download ZIP.  
  1.3. Распаковываем.  
2. Копируем файл build/Animator.dev.js и вставляем в самом верху страници сайта тильде.  
  Обязательно оборачиваем в теги script все скрипты.  
  Пример:  
  ```js
    <script type="text/javascript">
      // содержиое файла build/Animator.dev.js вставляем здесь
    <.script>
  ```
3. В самомй низу страници копируем к себе код ниже.  
```js
  <script type="text/javascript">
		window.animator = new Animator();
		var init_options = {
			selector_wrapper 	: [''#wrapper_distort_content_on_scroll', '.block-4 span'], // передаём селекторы
			implementation_name	: 'distort_content_on_scroll',
			will_change 		: 'transform',
			timing_function		: 'cubic-bezier(.6,.17,.85,.54)', // кривая Безье анимации
			transiton_duration	: 0.5,                            // продолжительность анимации 
			speed 		    : 0.35,
			offset_max		: 100
		};
		window.animator.init(init_options);
	</script>
  
  
  [ссалка на онлайн сервис настройки кривых Безье](#https://cubic-bezier.com/) 
