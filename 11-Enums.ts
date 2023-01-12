//enum type: useful to define a set of named constants

//numeric enums: All of the following members are auto-incremented from that point on. In other words, menuItems.SERVICE has the value 2, ABOUT has 3.
const enum menuItems {
    PRODUCTS = 1,
    SERVICE,
    ABOUT
}

//string enums
const enum menuItems1 {
    PRODUCTS = 'Products',
    SERVICE = 'Service',
    ABOUT = 'About',
}

const menubar = menuItems1.PRODUCTS;

//const menubar1 = menuItems.PRODUCTSe // TS Error: Property 'PRODUCTSe' does not exist on type 'typeof menuItems'.

export {} // Temporary to remove ts error.