
# Singleton Pattern

Singleton pattern is a convention lets us enforce creation of only one instance for a class in a clean manner.

It is used for a lot of usecases:
- Thread pools
- Caches
- Dialog box
- Objects that handle preferences and registry settings
- Objects used from logging
- Objects that act as device drivers

Singleton Class has the following structure

```ts

class Singleton {
    /** 
     * Static variable to hold the one instance of the class Singleton
    */
    private static uniqueInstance: Singleton;

    /** 
     * Our constructor is declared private; 
     * only Singleton can instantiate this class!
    */
    private constructor() {}

    /** 
     * The getInstance() method gives us a way to instantiate
     * the class and also to return an instance of it
    */
    public static getInstance(): Singleton {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new Singleton();
        }

        return this.uniqueInstance;
    }

    // other useful methods here
}

```