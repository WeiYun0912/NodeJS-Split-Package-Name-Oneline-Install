# NodeJS-Split-Package-Name-Oneline-Install

在開發新專案的時候如果有很多套是跟舊專案的 dependencies 一樣的話，通常都要一個一個把名稱複製貼到terminal，所以決定製作一個程式來簡化這段流程。

![image](https://user-images.githubusercontent.com/42636085/190314707-d1f15b06-0b2a-4b6c-b5f4-adfa23a8fb7c.png)

先將其他專案的package.json內的 dependencies 全部複製，並在執行index.js的時候，在第三個參數中直接貼上 dependencies，如下所示

Terminal：
```
node index.js "@apollo/client": "^3.6.9",
    "@rneui/base": "^4.0.0-rc.6",
    "@rneui/themed": "^4.0.0-rc.6",
    "expo": "~46.0.9",
    "expo-status-bar": "~1.4.0",
    "graphql": "^16.6.0",
    "react": "18.0.0",
    "react-native": "0.69.5",
    "react-native-safe-area-context": "4.3.1",
    "react-native-vector-icons": "^9.2.0"
```

![image](https://user-images.githubusercontent.com/42636085/190314149-8c54e0f1-b5c7-4060-91af-f74f36bd7bff.png)

Output： <br>
成功執行後會看到下圖的畫面，程式內也使用了clipboardy套件，自動將npm install的文字複製到電腦的剪貼簿，所以直接在新的專案底下ctrl+v就可以將以下文字貼上了。
![image](https://user-images.githubusercontent.com/42636085/190314207-43c9bb3b-cbd3-48de-becd-55710e9202c5.png)
