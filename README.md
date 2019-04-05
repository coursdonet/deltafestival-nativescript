# deltafestival-nativescript

Setup NativeScript: npm install -g nativescript

Check setup: tns doctor

Run: tns run android

### Possible problem and fix

If you have an error about a tns plugin like cardview or swipe menu:

tns plateform remove android
tns plugin remove nativescript-cardview
tns plugin add nativescript-cardview
tns build android --clean
tns run android

### Visual Studio Code environment
![Install NativeScript support](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodeextension1.jpg)

![NativeScript + Angular Snippets](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodeextension2.jpg)

![Angular Snippets](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodeextension3.jpg)

![Launch configuration for NativeScript](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodelaunch.jpg)

![Add user settings](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodesettings1.jpg)

![Exclude js files](https://sophiadigitalart.com/wp-content/uploads/2019/04/vscodesettings2.jpg)
