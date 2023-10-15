package beans;

import java.io.Serializable;

public class Row implements Serializable {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private Long scriptRuntime;
    private boolean isHit;

    public Row(){
    }

    public Row(double x, double y, double r, String current, Long scriptRuntime, boolean isHit){
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = current;
        this.scriptRuntime = scriptRuntime;
        this.isHit = isHit;
    }

    public double getR() {
        return r;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public Long getScriptRuntime() {
        return scriptRuntime;
    }

    public boolean getIsHit() {
        return isHit;
    }
}