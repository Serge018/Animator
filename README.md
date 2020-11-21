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
		selector_wrapper 	: [''#wrapper_distort_content_on_scroll', '.block-4 span'], // передаём селекторы, обязательное поле
		implementation_name	: 'distort_content_on_scroll',		// обязательное поле
		will_change 		: 'transform',				// указано значение по умолчанию
		timing_function		: 'cubic-bezier(.6,.17,.85,.54)', 	// кривая Безье анимации, указано значение по умолчанию
		transiton_duration	: 0.5,                            	// продолжительность анимации, указано значение по умолчанию
		speed 		    	: 0.35,					// указано значение по умолчанию
		offset_max		: 100					// указано значение по умолчанию
	};
	window.animator.init(init_options);
</script>
```  
***

Ссылка на онлайн сервис настройки [кривых Безье](https://cubic-bezier.com/) 
