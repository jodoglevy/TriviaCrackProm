Trivia Crack Prom
=============

### Description

A Chrome extension that modifies the questions asked by Trivia Crack to always be a question asking someone to prom. Learn more [here](http://jodoglevy.com/jobloglevy/going-to-prom-with-trivia-crack/).

![Trivia Crack Prom](https://raw.githubusercontent.com/jodoglevy/TriviaCrackProm/master/images/screenshots/question.png)

### Install

* Git clone this repository, or download and unzip using the 'Download Zip' button on the right of this page
* If you want to change the name of the person being asked to prom, or who is asking them, open background.js and modify `nameOfPersonToAskToProm` and/or `nameOfPersonAskingToProm`, which are defined at the top of the file
* Close all open Google Chrome processes. Note: Google Chrome has some hidden processes that will need to be closed using task manager, the command line, or a computer restart. On Windows, the PowerShell command to close all instances of Google Chrome is `Get-Process chrome | Stop-Process`
* Right click on Google Chrome on your Desktop, click Properties
* In 'Target', append to the end (outside the quotes) `--disable-web-security`. **Warning: This will make your use of Google Chrome less secure. Please see the blog post for why this is needed, and the uninstall instructions below for how to put Google Chrome back into a secure state when you are done using Trivia Crack Prom.**
* Go to `chrome://extensions/` in Google Chrome, check 'Developer mode', then 'load unpacked extension'
* Go to the downloaded folder you cloned or unzipped, and select the 'TriviaCrackProm' folder

### Use

Every time you want to use Trivia Crack Prom:
* Open Google Chrome using the icon on your desktop that was modified during installation
* Chrome should start and give you a warning about security. If it does not give you a warning, Trivia Crack Prom will not work, and you probably didn't close all Google Chrome processes. See above for how to do that. **Note: Please see the uninstall instructions below on how to put Google Chrome back into a secure state when you are done using Trivia Crack Prom.**
* Go to Trivia Crack on Facebook (https://apps.facebook.com/triviacrack/) and pick an active game where it is your turn

### Uninstall

When you have successfully asked your date to prom:
* Go to `chrome://extensions/` in Google Chrome and remove the Chrome extension we added during installation, Trivia Crack Prom
* Close all open Google Chrome processes. Note: Google Chrome has some hidden processes that will need to be closed using task manager, the command line, or a computer restart. On Windows, the PowerShell command to close all instances of Google Chrome is `Get-Process chrome | Stop-Process`
* Right click on Google Chrome on your Desktop, click Properties
* In 'Target', remove what we appended earlier: `--disable-web-security` **Note: it is important you properly follow the uninstallation instructions since during installation Google Chrome was put into a less-secure state. If you continue to receive a security warning each time you start Google Chrome, you still need to remove `--disable-web-security`. If even after removing that you still get the security warning, you probably didn't close all Google Chrome processes. See the install section for how to do that.**
