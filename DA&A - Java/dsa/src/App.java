import bst.BST;

public class App {
    public static void main(String[] args) throws Exception {
        BST tree = new BST();

        tree.insert(7);
        tree.insert(4);
        tree.insert(9);
        tree.insert(1);
        tree.insert(6);
        tree.insert(8);
        tree.insert(10);

        var result = tree.inorderTraversal();

        System.out.println(result);

        System.out.println("Done !");
    }
}
