package bst;

import java.util.ArrayList;
import java.util.List;

public class BST {

    private class Node { 
        private int value;
        private Node leftChild;
        private Node rightChild;

        public Node(int value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return "Node=" + value;
        }
    }

    private Node root;

    public void insert(int value) {

        if (root == null) {
            root = new Node(value);
            return; 
        }

        var current = root;

        while (true) {
            if (value < current.value) {
                if (current.leftChild == null) {
                    current.leftChild = new Node(value);
                    break;
                }
                current = current.leftChild;
            }
            else {
                if (current.rightChild == null) {
                    current.rightChild = new Node(value);
                    break;
                }

                current = current.rightChild;
            }
        }
    }
    private void inorderTraversal(Node node, List<Integer> result) {
    if (node == null) return;
    inorderTraversal(node.leftChild, result);
    result.add(node.value);
    inorderTraversal(node.rightChild, result);
}
public List<Integer> inorderTraversal() {
    List<Integer> result = new ArrayList<>();
    inorderTraversal(root, result);
    return result;
}
    
}
