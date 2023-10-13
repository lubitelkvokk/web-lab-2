package controller;

public enum ForwardElements {
    AREA_CHECK("/areaCheck"), INDEX_JSP("/index");

    private String name;

    ForwardElements(String name){
        this.name = name;
    }

    public boolean CheckIn(String s){

        return getName().equals(s);
    }

    public String getName(){
        return this.name;
    }
}
