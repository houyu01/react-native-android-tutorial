package com.hellowreact.extension;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.hellowreact.MainActivity;

/**
 * Created by baidu on 16/6/11.
 */
public class SkipInterface extends ReactContextBaseJavaModule {

    public SkipInterface(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void open(String url) {
//      Intent intent = new Intent();
//      intent.setClass(MainActivity, DetailActivity.class);
        MainActivity activity = (MainActivity) getCurrentActivity();
        activity.seeDetail(url);
    }

    @Override
    public String getName() {
        return "DetailViewer";
    }
}
