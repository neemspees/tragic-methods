// This class doesn't do anything, but it's
// necessary because Java doesn't support freestanding functions
class Variance {
    public static void main(String[] args) {
        // This compiles without warnings, but throws an ArrayStoreException at runtime
        Object[] objects = new Integer[1];
        objects[0] = new Object();
    }
}
