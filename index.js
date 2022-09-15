import clipboardy from "clipboardy";

if (process.argv.length >= 3) {
  let packagesSplice = process.argv.splice(2);
  let packagesInstallOneline = "";
  //0 3 6 9
  packagesSplice.map((packageName, i) => {
    if (i % 3 == 0) {
      packagesInstallOneline += `${packageName} `;
    }
  });
  clipboardy.writeSync(`npm install ${packagesInstallOneline}`);

  console.log(`npm install ${packagesInstallOneline}`);
} else {
  let packages = `"@apollo/client": "^3.6.6",
  "@react-navigation/bottom-tabs": "^6.3.1",
  "@react-navigation/material-bottom-tabs": "^6.2.1",
  "@react-navigation/native": "^6.0.10",
  "@react-navigation/stack": "^6.2.1",
  "react-native-gesture-handler": "~2.2.1",
  "react-native-paper": "^4.12.1",
  "react-native-safe-area-context": "4.2.4",
  "react-native-screens": "~3.11.1",
  "react-native-track-player": "^2.1.3",
  "react-native-vector-icons": "^9.1.0",
  "react-native-web": "0.17.7",
  "react-simple-timestamp-to-date": "^1.0.3",`;

  let packagesReplaceDoubleQuotes = packages.replace(/"/g, "");

  let packagesSplitNameAndVersion = packagesReplaceDoubleQuotes.split(",");

  let packagesRemoveVersion = packagesSplitNameAndVersion.map(
    (packageDetetail) => packageDetetail.split(":")[0].replace(/\n/g, "")
  );

  let packagesInstallOneline = "";

  packagesRemoveVersion.map((packageName) => {
    //   console.log(package.replace(/\n/g, ""));
    packagesInstallOneline += `${packageName} `;
  });
  clipboardy.writeSync(`npm install ${packagesInstallOneline}`);

  console.log(`npm install ${packagesInstallOneline}`);
}
