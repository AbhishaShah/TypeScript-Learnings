//enum type: useful to define a set of named constants

const enum menuItems {
    PRODUCTS = 'Products',
    SERVICE = 'Service',
    ABOUT = 'About',
}

const menubar = menuItems.PRODUCTS;

//const menubar1 = menuItems.PRODUCTSe // TS Error: Property 'PRODUCTSe' does not exist on type 'typeof menuItems'.

export {} // Temporary to remove ts error.