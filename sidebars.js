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

	GetStarted: [
		{
			type: 'doc',
			id: 'concepts/quickstart',
			label: "Quickstart"
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
			label: 'Webforms',
			items: ['studio/design-webforms/create-webform',
				{
					type: 'category',
					label: 'Components',
					items: [
						'studio/design-webforms/components/componentsBasics',
						'studio/design-webforms/components/stylebox',
						'studio/design-webforms/components/selectbox',
						'studio/design-webforms/components/tabs',
						'studio/design-webforms/components/webformloader',
						'studio/design-webforms/components/matrix',
						'studio/design-webforms/components/datatable',
						'studio/design-webforms/components/text',
						'studio/design-webforms/components/button',
						'studio/design-webforms/components/textinput',
						'studio/design-webforms/components/image',
						'studio/design-webforms/components/fileupload',
						'studio/design-webforms/components/radio',
						'studio/design-webforms/components/rangeinput',
						'studio/design-webforms/components/selectinput',
						'studio/design-webforms/components/icon',
						'studio/design-webforms/components/checkbox',
					],
				},
				'studio/design-webforms/craftedComponents',
				'studio/design-webforms/templates',
				'studio/design-webforms/styling',
				'studio/design-webforms/datasources',
				'studio/design-webforms/events',
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
			label: 'Access Control',
			items: [
				'studio/roles/accessControlMechanisms',
				'studio/roles/rolesPrivilegesOverview',
				{
					type: 'category',
					label: 'Permissions',
					items: [
						'studio/roles/datastorePermissions',
						'studio/roles/dataClassPermissions',
						'studio/roles/attributesPermissions',
						'studio/roles/functionPermissions'
					]
				},
				'studio/roles/includingPrivileges',
			],
		},
		{
			type: 'category',
			label: 'Programming Guide',
			items: ['orda/data-model', 'orda/data', 'orda/queries',
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
						slug: '/category/language',
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
				'language/BlobClass',
				'language/boolean',
				'language/ClassClass',
				'language/CollectionClass',
				'language/CryptoKeyClass',
				'language/DataClassClass',
				'language/DataStoreClass',
				'language/dateandtime',
				'language/debug',
				'language/EmailObjectClass',
				'language/EntityClass',
				'language/EntitySelectionClass',
				'language/FileClass',
				'language/FileHandleClass',
				'language/FolderClass',
				'language/FunctionClass',
				'language/HTTPRequestClass',
				'language/IMAPTransporterClass',
				'language/json',
				'language/MailAttachmentClass',
				'language/math',
				'language/object',
				'language/pictures',
				'language/process',
				'language/SessionClass',
				'language/SignalClass',
				'language/string',
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

	Run: [
		{
			type: 'doc',
			id: 'cloud/getStarted',
			label: "Qodly Applications"
		},
		{
			type: 'doc',
			id: 'cloud/application-management',
			label: "Application Management"
		},
		{
			type: 'doc',
			id: 'cloud/deployment',
			label: "Release Management and Deployment"
		},
	],

	Architecture: [
		{
			type: 'doc',
			id: 'concepts/platform',
			label: "Platform Overview"
		},
		{
			type: 'doc',
			id: 'concepts/cloud',
			label: "Cloud Architecture"
		},
	],

	API: [
		{
			type: 'category',
			label: 'API',
			link: {
				type: 'generated-index',
				title: 'API',
				description: 'QodlyScript REST API',
				slug: '/category/API',
				image: '/img/docusaurus.png',
			},
			items: [
				{
					type: 'doc',
					id: 'api/overview-api',
					label: "Overview"
				},
			],
		},
	],
	ReleaseNotes: [
		{
			type: 'category',
			label: 'Qodly Versions',
			collapsed: false,
			items: [
				'notes/v1.0.0-beta.2',
				'notes/v1.0.0-beta.1'
			],
		},
	],
};

module.exports = sidebars;
