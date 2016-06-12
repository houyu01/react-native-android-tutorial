    package com.hellowreact.extension;

    import android.content.Intent;

    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.bridge.ReactContextBaseJavaModule;
    import com.facebook.react.bridge.ReactMethod;
    import com.hellowreact.DetailActivity;
    import com.hellowreact.MainActivity;

    /**
     * Created by baidu on 16/6/12.
     */
    public class MyExtension extends ReactContextBaseJavaModule {
        public MyExtension(ReactApplicationContext reactContext) {
            super(reactContext);
        }

        @ReactMethod
        public void open() {
            MainActivity activity = (MainActivity) getCurrentActivity();
            activity.skip();
        }

        @Override
        public String getName() {
            return "MyExtension";
        }
    }
