Folder Structure

src/
│
├── components/
│ │
│ ├── atoms/ # Contains the smallest, most basic building blocks
│ │ ├── Button/
│ │ ├── Popup/
│ │ └── ...
│ │
│ ├── molecules/ # Contains groups of atoms to form higher-level components
│ │ ├── Form/
│ │ ├── Card/
│ │ └── ...
│ │
│ ├── organisms/ # Contains components that are composed of molecules and/or atoms
│ │ ├── Navbar/
│ │ ├── Sidebar/
│ │ └── ...
│ │
│ ├── templates/ # Contains page-level components that define the layout structure
│ │ ├── MainLayout/
│ │ ├──
│ │ └── ...
│ │
│ └── pages/ # Contains full-page components that render templates with content
│ ├── Home/
│ ├── About/
| ├── Login/
│ └── ...
│
└── styles/ # Contains global styles, theme files, or any other styling-related assets
├── global.css
├── theme.js
└── ...
