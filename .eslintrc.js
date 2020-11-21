module.exports = {
	'env': { // наборы глобальных переменных
		'browser'	: true,
		'commonjs'	: true,
		'es6'		: true,
		'jquery'	: true,
		'node'		: true
	},
	'extends': 'eslint:recommended', 	// предустановленные наборы правил
	'globals': 							// глобальные переменные
	{ 
		'$'										: 'readonly',
		'jQuery'								: 'readonly',
		'Animator'								: 'readonly',
		'ServiceSubscriptions'								: 'readonly',
	},
	'parserOptions':  // парсер
	{
		'ecmaVersion': 2018
	},
	'ignorePatterns': [
		'gulpfile.js', 
		'node_modules/', 
		'!.eslintrc.js'
	], // игнорирование файлов и каталогов
	'overrides':   // исключения
	[
		{
			'files': 
			[
				'gulpfile.js'
			],
			'rules': 
			{
				'indent': 'off'
			}
		}
	],
	'plugins': 
	[ // плагины
		'snakecasejs'
	],
	'settings':
	{
		'snakecasejs/filter': 
		[
			'ClassDeclaration', 
			'NewExpression', 
			'MemberExpression'
		],
		'snakecasejs/whitelist': 
		[
			'externalPath'
		]
	},
	'rules': 
	{ 
		'indent': // правила
		[
			'warn',
			'tab',
			{
				'SwitchCase' : 1
			}
		],
		'quotes': 
		[
			'warn', 
			'single'
		],
		'semi': 
		[
			'warn',
			'always'
		],
		'brace-style': 
		[
			'warn',
			'allman'
		],
		'snakecasejs/snakecasejs': 'error',
		'require-jsdoc': 
		[
			'error', 
			{
				'require': 
				{
					'FunctionDeclaration': false,
					'MethodDefinition': true,
					'ClassDeclaration': true,
					'ArrowFunctionExpression': false,
					'FunctionExpression': false
				}
			}
		]
	}
};
