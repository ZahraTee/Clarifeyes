# Clarifeyes
###A Chrome extension narrating the visual web for the visually impaired.

Clarifeyes improves the accessibility of image content by automatically adding keyword to the alt tags of img attributes in a webpage's HTML, allowing this to be read aloud by screenreaders.

What's more, it also allows the sighted to help to improve the service for visually-impaired users and increase its accuracy by allowing them to remove irrelevant tags by clicking on them. This sends feedback to Clarifai, which is used to train the models providing the results!

This project makes use of the [Clarifai](http://clarifai.com/) tag and feedback APIs.

##Setup
In order to use this extension, you'll need to provide your own keys, and therefore, create a Clarifai developer account!

1. Sign up for a free account [here](https://developer.clarifai.com/signup/champs).
2. Click "Applications" in the sidebar.
3. Click "Create a new Application".
4. Fill in the app name and other details.
You now have your very own set of API keys. Keep them safe!

##Installing Clarifeyes
1. Clone this repo or download it as a ZIP.
2. Open up Google Chrome. (Download it here if you need to: https://www.google.com/chrome/)
3. Access the Extensions menu (Enter chrome://extensions/ into the address bar.)
4. Click "Load unpacked extensions..."
5. Navigate to the Clarifeyes folder and click "Open".

Clarifeyes should now appear in your list of extensions!

##Future Improvements
* Bug-fix the feedback mechanism, which works intermittently.
* Store API keys so they don't have to be re-entered on each page.
