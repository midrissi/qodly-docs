/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	//tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	/*
	  tutorialSidebar: [
		'intro',
		'hello',
		{
		  type: 'category',
		  label: 'Tutorial',
		  items: ['tutorial-basics/create-a-document'],
		},
	  ],
	   */
	// {
	//   type: "category",
	//   label: "@ws-ui/store",
	//   items: [
	//     {
	//       type: "autogenerated",
	//       dirName: "api-reference/store",
	//     },
	//   ],
	// },

	GetStarted: [
		{
			type: 'doc',
			id: 'get-started/quickstart'
		},
		{
			type: 'doc',
			id: 'get-started/first-app'
		},{
			type: 'doc',
			id: 'get-started/test-debug'
		},
		{
			type: 'doc',
			id: 'get-started/deployment'
		},
		{
			type: 'doc',
			id: 'get-started/data-management'
		},
		{
			type: 'doc',
			id: 'get-started/support'
		},
		{
			type: 'doc',
			id: 'get-started/updates'
		},
		{
			type: 'doc',
			id: 'get-started/community'
		},
		{
			type: 'doc',
			id: 'get-started/subscriptions'
		},
		{
			type: 'doc',
			id: 'get-started/payments'
		},
		{
			type: 'doc',
			id: 'get-started/refunds'
		},
	],
	Develop: [
		{
			type: 'doc',
			id: 'studio/overview',
			label: "Overview"
		},
		{
			type: 'category',
			label: 'Model',
			items: ['studio/model/model-editor-interface',
				'studio/model/datastore-classes',
				'studio/model/attributes',
				'studio/model/functions',
				'studio/model/import',
			],
		},
		{
			type: 'category',
			label: 'Pages',
			items: ['studio/pageLoaders/pageLoaderOverview',
				{
					type: 'category',
					label: 'Components',
					items: [
						'studio/pageLoaders/components/componentsBasics',
						'studio/pageLoaders/components/uploadCustomComponents',
						'studio/pageLoaders/components/stylebox',
						'studio/pageLoaders/components/dialog',
						'studio/pageLoaders/components/selectbox',
						'studio/pageLoaders/components/tabs',
						'studio/pageLoaders/components/pageLoader',
						'studio/pageLoaders/components/matrix',
						'studio/pageLoaders/components/datatable',
						'studio/pageLoaders/components/text',
						'studio/pageLoaders/components/button',
						'studio/pageLoaders/components/textinput',
						'studio/pageLoaders/components/image',
						'studio/pageLoaders/components/fileupload',
						'studio/pageLoaders/components/radio',
						'studio/pageLoaders/components/rangeinput',
						'studio/pageLoaders/components/selectinput',
						'studio/pageLoaders/components/icon',
						'studio/pageLoaders/components/checkbox',
					],
				},
				'studio/pageLoaders/craftedComponents',
				'studio/pageLoaders/templates',
				'studio/pageLoaders/date-time-formats',
				'studio/pageLoaders/qodlySources',
				{
					type: 'category',
					label: 'Events',
					items: [
						'studio/pageLoaders/events/overview',
						'studio/pageLoaders/events/eventsManagement',
						'studio/pageLoaders/events/bindingActionToEvents',
					],
				},
				{
					type: 'category',
					label: 'States',
					items: [
						'studio/pageLoaders/states/stateOverview',
						'studio/pageLoaders/states/nonConditionalState',
						'studio/pageLoaders/states/conditionalState',
					],
				},
				'studio/pageLoaders/styling',
				'studio/rendering',
			],
		},
		{
			type: 'doc',
			id: 'studio/settings',
			label: "Settings"
		},
		{
			type: 'doc',
			id: 'data-explorer/data-explorer',
			label: "Data Explorer"
		},
		{
			type: 'category',
			label: 'Coding and Debugging',
			items: ['studio/coding',
				'studio/debugging',
			],
		},
		{
			type: 'category',
			label: 'Roles & Privileges',
			items: [
				'studio/roles/overview',
				{
					type: 'category',
					label: 'Permissions',
					items: [
						'studio/roles/permissionsOverview',
						'studio/roles/datastorePermissions',
						'studio/roles/dataClassPermissions',
						'studio/roles/attributesPermissions',
						'studio/roles/functionPermissions',
						'studio/roles/modelEditorApproach'
					]
				},
				'studio/roles/includingPrivileges',
			],
		},
		{
			type: 'category',
			label: 'Programming Guide',
			items: [	'orda/data-model', 
						'orda/data',
						'orda/queries',
						'orda/sessions',
			],
		},
		{
			type: 'category',
			label: 'QodlyScript Reference',
			link: {
				type: 'generated-index',
				title: 'QodlyScript',
				description: 'QodlyScript Reference Guide',
				slug: '/category/qodlyscript',
				keywords: ['qodlyscript', 'language'],
				image: '/img/docusaurus.png',
			},
			items: [
				'language/basics/lang-quicktour',
				{
					type: 'category',
					label: 'Basics',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Basics',
						description: 'Main concepts of the QodlyScript Language.',
						slug: '/category/language-basics',
						keywords: ['language'],
						image: '/img/docusaurus.png',
					},
					items: [
						'language/basics/lang-variables',
						{
							type: 'category',
							label: 'Data Types',
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: 'language/basics/lang-data-types',
							},
							items: [
								'language/basics/lang-blob',
								'language/basics/lang-boolean',
								'language/basics/lang-collection',
								'language/basics/lang-date',
								'language/basics/lang-null-undefined',
								'language/basics/lang-number',
								'language/basics/lang-object',
								'language/basics/lang-picture',
								'language/basics/lang-time',
								'language/basics/lang-text',
								'language/basics/lang-variant',
							],
						},
						'language/basics/lang-operators',
						'language/basics/lang-methods',
						'language/basics/lang-classes',
						'language/basics/lang-parameters',
						'language/basics/lang-expressions',
						'language/basics/lang-shared',
						'language/basics/lang-control-flow',
						'language/basics/lang-errors',
						'language/basics/lang-identifiers',
						'language/basics/lang-pathnames',
					],
				},
				{
					type: 'category',
					label: 'Commands',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'language/commands/command-list',
					},
					items: [
						'language/commands/abort',
						'language/commands/abortProcessByID',
						'language/commands/abs',
						'language/commands/addToDate',
						'language/commands/arctan',
						'language/commands/assert',
						'language/commands/asserted',
						'language/commands/base64Decode',
						'language/commands/base64Encode',
						'language/commands/blobToPicture',
						'language/commands/bool',
						'language/commands/callChain',
						'language/commands/callWorker',
						'language/commands/changeString',
						'language/commands/char',
						'language/commands/characterCode',
						'language/commands/clearSemaphore',
						'language/commands/compareStrings',
						'language/commands/convertFromString',
						'language/commands/convertPicture',
						'language/commands/convertToString',
						'language/commands/cos',
						'language/commands/createThumbnail',
						'language/commands/currentDate',
						'language/commands/currentMethodName',
						'language/commands/currentProcess',
						'language/commands/currentProcessName',
						'language/commands/currentTime',
						'language/commands/date',
						'language/commands/dayNumber',
						'language/commands/dayOf',
						'language/commands/dec',
						'language/commands/delayProcess',
						'language/commands/deleteString',
						'language/commands/ds',
						'language/commands/exp',
						'language/commands/false',
						'language/commands/file',
						'language/commands/folder',
						'language/commands/formula',
						'language/commands/formulaFromString',
						'language/commands/generateDigest',
						'language/commands/generatePasswordHash',
						'language/commands/generateUUID',
						'language/commands/getAssertEnabled',
						'language/commands/getPictureFileName',
						'language/commands/getPictureMetadata',
						'language/commands/getProcessActivity',
						'language/commands/highestProcessNumber',
						'language/commands/insertString',
						'language/commands/instanceOf',
						'language/commands/int',
						'language/commands/jsonParse',
						'language/commands/jsonResolvePointers',
						'language/commands/jsonStringify',
						'language/commands/jsonValidate',
						'language/commands/killWorker',
						'language/commands/lastErrors',
						'language/commands/length',
						'language/commands/log',
						'language/commands/lowercase',
						'language/commands/mailConvertFromMIME',
						'language/commands/mailConvertToMIME',
						'language/commands/matchRegex',
						'language/commands/methodCalledOnError',
						'language/commands/milliseconds',
						'language/commands/mod',
						'language/commands/monthOf',
						'language/commands/newCollection',
						'language/commands/newObject',
						'language/commands/newSharedCollection',
						'language/commands/newSharedObject',
						'language/commands/newSignal',
						'language/commands/not',
						'language/commands/num',
						'language/commands/objectClass',
						'language/commands/objectCopy',
						'language/commands/objectEntries',
						'language/commands/objectIsDefined',
						'language/commands/objectIsEmpty',
						'language/commands/objectIsShared',
						'language/commands/objectKeys',
						'language/commands/objectRemove',
						'language/commands/objectValues',
						'language/commands/onErrCall',
						'language/commands/openDatastore',
						'language/commands/pictureProperties',
						'language/commands/pictureSize',
						'language/commands/pictureToBlob',
						'language/commands/position',
						'language/commands/processInfo',
						'language/commands/processNumber',
						'language/commands/processState',
						'language/commands/random',
						'language/commands/replaceString',
						'language/commands/round',
						'language/commands/semaphore',
						'language/commands/session',
						'language/commands/setAssertEnabled',
						'language/commands/setPictureFileName',
						'language/commands/setPictureMetadata',
						'language/commands/setRealComparisonLevel',
						'language/commands/sin',
						'language/commands/splitString',
						'language/commands/squareRoot',
						'language/commands/storage',
						'language/commands/string',
						'language/commands/substring',
						'language/commands/tan',
						'language/commands/testSemaphore',
						'language/commands/throw',
						'language/commands/time',
						'language/commands/timestamp',
						'language/commands/timeString',
						'language/commands/trace',
						'language/commands/true',
						'language/commands/trunc',
						'language/commands/uppercase',
						'language/commands/verifyPasswordHash',
						'language/commands/webEvent',
						'language/commands/webForm',
						'language/commands/webServer',
						'language/commands/webServerList',
						'language/commands/yearOf',
						'language/commands/zipCreateArchive',
						'language/commands/zipReadArchive',

					],
				},
				{
					type: 'category',
					label: 'Classes',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Classes',
						description: 'QodlyScript classes',
						slug: '/category/classes',
						keywords: ['classes'],
						image: '/img/docusaurus.png',
					},
					items: [
						'language/BlobClass',
						'language/ClassClass',
						'language/CollectionClass',
						'language/CryptoKeyClass',
						'language/DataClassClass',
						'language/DataStoreClass',
						'language/EmailObjectClass',
						'language/EntityClass',
						'language/EntitySelectionClass',
						'language/FileClass',
						'language/FileHandleClass',
						'language/FolderClass',
						'language/FunctionClass',
						'language/HTTPRequestClass',
						'language/IMAPTransporterClass',
						'language/MailAttachmentClass',
            'language/POP3TransporterClass',
						'language/SessionClass',
						'language/SignalClass',
            'language/SMTPTransporterClass',
						'language/SystemWorkerClass',
						'language/UsersClass',
						'language/WebFormClass',
						'language/WebFormItemClass',
						'language/WebServerClass',
						'language/ZipArchiveClass',
						'language/ZipFileClass',
						'language/ZipFolderClass',
					],
				},
			],
		},
	],

	Run: [
		'cloud/consoleOverview',
		{
			type: 'category',
			label: 'Applications',
			items: [
				'cloud/sandbox',
				'cloud/myApps',
			],
		},
		{
			type: 'category',
			label: 'Environments',
			items: [
				'cloud/environmentsOverview',
				'cloud/resourceMonitoring',
				'cloud/apiKeys',
				'cloud/dataManagement',
				'cloud/deployManagement',			
			],
		},
		'cloud/billingSubscriptionManagement',
		'cloud/userAccountManagement',
	],

	ReactComponent: [
		{
			type: 'doc',
			id: 'customComponent/overview',
		},
		{
			type: 'doc',
			id: 'customComponent/setup',
		},
		{
			type: 'doc',
			id: 'customComponent/structure',
		},
		{
			type: "category",
			label: "API Reference",
			items: [
				{
					type: 'category',
					label: '@ws-ui/webform-editor',
					items: [
						// @start custom-components@webform-editor
						'customComponent/api-reference/webform-editor/v0.3.20',
						'customComponent/api-reference/webform-editor/v0.2.24',
						'customComponent/api-reference/webform-editor/v0.2.16',
						// @end custom-components@webform-editor
					]
				},
			],
		},
	],
	API: [
		{
			type: 'doc',
			id: 'api/overview',
		},
		{
			type: 'category',
			label: 'Server Information API',
			items: [
				'api/$catalog',
				'api/$info'
			],
		},
		{
			type: 'category',
			label: 'DataClass Operations API',
			items: [
				'api/dataclassEndpoints',
				'api/dataclassManipulation',
				'api/$asArray',
				'api/$atomic$atOnce',
				'api/$attributes',
				'api/$binary',
				'api/$clean',
				'api/$compute',
				'api/$distinct',
				'api/$entityset',
				'api/$expand',
				'api/$filter',
				'api/$format',
				'api/$imageformat',
				'api/$lock',
				'api/$method',
				'api/$orderby',
				'api/$queryplan',
				'api/$querypath',
				'api/$savedfilter',
				'api/$savedorderby',
				'api/$singleton',
				'api/$skip',
				'api/$timeout',
				'api/$top$limit',
				'api/$version',
			],
		},
		{
			type: 'category',
			label: 'Class Functions API',
			items: [
				'api/classFunctionsOverview',
				'api/classFunctionsParameters',
				'api/classfunctionsFunctionCalls'
			],
		},
	],
	ReleaseNotes: [
		{
			type: 'category',
			label: 'Qodly Releases',
			collapsed: false,
			items: [
						'notes/1.0.0-beta.6',
						'notes/1.0.0-beta.5',
						'notes/1.0.0-beta.4',
						'notes/1.0.0-beta.3',
						'notes/1.0.0-beta.2',
						'notes/1.0.0-beta.1',
						'notes/1.0.0-beta.0'
					],
		},
	],
};

module.exports = sidebars;
