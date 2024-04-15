# The Public Code Folder

This folder contains the public code files for your site. These files correspond to the ones found in the [**Public**](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#public) section of the  **Public & Backend** ![image](https://user-images.githubusercontent.com/89579857/184873215-d6042ace-4d20-40f2-ad37-1b1911302f96.png) tab in the Velo sidebar. You can import code from these files into any other file on your site.

Use the following syntax to import code from public files:
```js
import { myFunctionName } from 'public/myFileName';
```   
Trying to import from the relative path in your site's repo doesn't work.

Learn more about [this repo's file structure](https://support.wix.com/en/article/velo-understanding-your-sites-github-repository-beta).
