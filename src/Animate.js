/**
* Сервис анимаций
* 
* @namespace		Animator
* @author			Sergey Ivenskiy <sivenskij@gmail.com>
* @version			v.1.0 (30/10/2020)
*/
class Animator
{
	/**
	* Конструктор
	*
	* @example			window.animator = new Animator();
	*
	* @author			Sergey Ivenskiy <sivenskij@gmail.com>
	* @version			v.0.1 (30/10/2020)  
	* @param			{object} options - настройки приложения (опции)
	*/
	constructor()
	{
		if (!Animator._instance)
		{
			this.module_name 	= 'Animator';

			this.default_config = 
			{
				distort_content_on_scroll :
				{
					will_change 		: 'transform',
					timing_function		: 'cubic-bezier(.6,.17,.85,.54)',
					transiton_duration	: 0.5,
					speed 				: 0.35,
					offset_max			: 100
				}
			};

			this.available_implementations_name = 
			[
				'distort_content_on_scroll'
			];

			this.implemetation_options = 
			{
				distort_content_on_scroll : {}
			};

			// this.subscriptions 	= new ServiceSubscriptions();
			Animator._instance = this;
		}
		else
		{
			return Animator._instance;
		}
	}


	/**
	* 
	* Инициализация анимации
	* 
	* var init_options = {
	*	selecor_wrapper,		// string, required
	*	implementation_name		// string, required
	* };
	* window.animator.init(init_options)
	* 
	* @author			Sergey Ivenskiy <sivenskij@gmail.com>
	* @version			v.1.0 (30/10/2020)  
	* @param			{object} init_options
	* return			{boolean} response
	*/
	init(init_options)
	{
		let { implementation_name = false, selector_wrapper = false } = init_options;

		if (!implementation_name)
		{
			console.error(this.module_name + ' :: implementation_name requierd');
			console.log('init_options : ', init_options);
			return false;
		}

		if (!this.available_implementations_name.includes(implementation_name))
		{
			console.error(this.module_name + ' :: implementation_name is not available');
			console.log('init_options : ', init_options);
			return false;
		}

		if (!init_options.selector_wrapper.length)
		{
			console.error(this.module_name + ' :: unvalid selector_wrapper');
			console.log('init_options : ', init_options);
			return false;
		}

		init_options = Object.assign(this.default_config[implementation_name], init_options);
		this.implemetation_options[implementation_name] = init_options;

		let setup_method_name = '_setup_' + implementation_name;

		let is_firefox	= navigator.userAgent.search('Firefox') > -1;
		if (is_firefox)
		{
			return false;
		}

		let setup = (init_options) =>
		{
			let result = this[setup_method_name](init_options);
			if (!result)
			{
				console.error(this.module_name + ` :: ${ implementation_name } not setup`);
			}

			return result;
		};

		let selectors_wrapper = selector_wrapper.toString().split(',');
		for (let selector_wrapper of selectors_wrapper)
		{
			// @todo проверка
			setup({ ...init_options, selector_wrapper });
		}

		return true;
	}


	/**
	* 
	* Устанавливает необхлдимы для корректной работы элементы
	* 
	* @author			Sergey Ivenskiy <sivenskij@gmail.com>
	* @version			v.1.0 (30/10/2020)
	* return			{boolean} response
	*/
	_setup_distort_content_on_scroll(init_options)
	{
		// добавяем стили
		document.body.insertAdjacentHTML('afterbegin', `
			<style type="text/css">
				${ init_options.selector_wrapper } {
					transition-property : transform;
					transition-duration : ${ init_options.transiton_duration }s;
					transition-timing-function : ${ init_options.timing_function });
					will-change : transform;
				}
			</style>`);

		// ищем элемент
		let wrapper = document.querySelector(init_options.selector_wrapper);
		if (!wrapper)
		{
			console.error(this.module_name + ' :: selector_wrapper requierd type of string');
			console.log('init_options : ', init_options);
			return false;
		}

		let current_position = window.pageYOffset;
		let call_distord 	 = function ()
		{
			let new_position 		= window.pageYOffset;
			let diff 				= new_position - current_position;
			if (diff > init_options.offset_max)
			{
				diff = init_options.offset_max;
			}

			let skew 				= Math.floor(diff * init_options.speed);
			current_position 		= new_position;
			wrapper.style.transform = `skewY(${ skew }deg)`; 

			requestAnimationFrame(call_distord);
		};
		call_distord();

		return true;
	}

	/**
	* Вызов анимации
	* 
	* @author			Sergey Ivenskiy <sivenskij@gmail.com>
	* @version			v.1.0 ()  
	* @param			{}
	* return			{} response
	*/
	animate()
	{
		// retutn
	}


	/**
	*  Удаление
	*
	* @author			Sergey Ivenskiy <sivenskij@gmail.com>
	* @version			v.1.0 ()  
	* @param			{}
	* return			{} response
	*/
	destroy()
	{
		// return
	}
}