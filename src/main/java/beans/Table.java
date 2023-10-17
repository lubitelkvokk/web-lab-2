package beans;

import java.io.Serializable;
import java.util.LinkedList;

public class Table implements Serializable {
    private final LinkedList<Row> table = new LinkedList<>();

    public Table() {
    }

    public LinkedList<Row> getTable() {
        return (LinkedList<Row>) table.clone();
    }

    public void addRow(Row row) {
        table.add(row);
    }

}
