package beans;

import java.io.Serializable;
import java.util.LinkedList;

public class Table implements Serializable {
    private LinkedList<Row> table = new LinkedList<>();

    public Table(){}

    public Table(LinkedList<Row> table){
        this.table = table;
    }

    public LinkedList<Row> getTable() {
        return table;
    }

    public void setTable(LinkedList<Row> table) {
        this.table = table;
    }
}
