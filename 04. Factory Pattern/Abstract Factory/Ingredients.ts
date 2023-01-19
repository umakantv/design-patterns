
export interface Dough {
    name: string;
}

export interface Sauce {
    name: string;
}

export interface Cheese {
    name: string;
}

export interface Clams {
    name: string;
}

export interface Pepperoni {
    name: string;
}

export interface Veggies {
    name: string;
}

// =================

export class ThickCrustDough implements Dough {
    name: string = 'Thick Crust Dough';
}

export class ThinCrustDough implements Dough {
    name: string = 'Thin Crust Dough';
}

export class PlumTomatoSauce implements Sauce {
    name = 'Plum Tomato Sauce'
}
export class MarinaraSauce implements Sauce {
    name = 'Marinara Sauce'
}

export class MozzarellaCheese implements Cheese {
    name = 'Mozzarella Cheese'
}
export class ReggianoCheese implements Cheese {
    name = 'Reggiano Cheese'
}

export class FrozenClams implements Clams {
    name = 'Frozen Clams'
}
export class FreshClams implements Clams {
    name = 'Fresh Clams'
}
