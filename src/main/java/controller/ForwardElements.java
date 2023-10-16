package controller;

public enum ForwardElements {
    AREA_CHECK("/areaCheck"),
    INDEX_JSP("/public/index.jsp"),
    RESULT_JSP("/public/result.jsp"),
    ERROR_PAGE("/public/error_page.jsp");

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
