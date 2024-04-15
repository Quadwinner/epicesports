# The Backend Code Folder

This folder contains the backend code files for your site. These files correspond to the ones found in the [**Backend**](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#backend) section of the **Public & Backend** 
![image](https://user-images.githubusercontent.com/89579857/184862813-e55cdd98-b723-4d64-b73c-593eb9af21c7.png) tab in the Velo sidebar. Add the following files to this folder to include them in your site:
+ [**Web Modules:**](https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend)  
  These are files that allow you to expose functions in your site's backend that you can run in your frontend code. These files require a `.jsw` file extension.
  >**Note:**  
  >You can't change [web module permissions](https://support.wix.com/en/article/velo-about-web-module-permissions) in Wix editors when using Git Integration & Wix CLI. Instead, use the [permissions.json](#permissionsjson) file to set function permissions.

+ **data.js**  
  A file for [adding data hooks](https://support.wix.com/en/article/velo-using-data-hooks) to your site's collections.

+ **routers.js**  
  A file for implementing [routing and sitemap](https://support.wix.com/en/article/velo-about-routers#routing-code) functionality for your site.

+ **events.js**  
  A file for implementing your site's [backend event handlers](https://support.wix.com/en/article/velo-backend-events). 

+ **http-functions.js**  
  A file for implementing [HTTP endpoints](https://www.wix.com/velo/reference/wix-http-functions/introduction) that are exposed on your site.

+ **jobs.config**  
  A file for [scheduling recurring jobs](https://support.wix.com/en/article/velo-scheduling-recurring-jobs). Jobs consist of other backend code that's run at regular intervals.
  
+ **General backend files**  
  JavaScript code files. You can import code from these files into any other backend file on your site. These files require a `.js` file extension.

Use the following syntax to import code from backend files: 
```js 
import { myFunctionName } from 'backend/myFileName';
```  
Trying to import from the relative path in your site's repo doesn't work.

Learn more about [this repo's file structure](https://support.wix.com/en/article/velo-understanding-your-sites-github-repository-beta).

## permissions.json
This file defines [permissions](https://support.wix.com/en/article/velo-about-web-module-permissions) for the functions in your web module files. The file contains a key, `"web-methods"`, whose value is an object that can contain keys named after the web module files in your `backend` folder. Name these keys with the following syntax: `"backend/{path to file}myFile.jsw"`. The value for each file name key is an object that can contain keys named after the functions in that file. Each function key has a value with the following format:
```js
"backend/myFile.jsw": {
  "siteOwner" : {
    "invoke" : // Boolean
  },
  "siteMember" : {
    "invoke" : // Boolean
  },
  "anonymous" : {
    "invoke" : // Boolean
  }  
}
```
These values reflect the different levels of web module function permissions. You can set them using the following options:
| |`siteOwner`|`siteMember`|`anonymous`|
|-|-----------|------------|-----------|
|Owner-only access| `true` | `false` | `false`|
|Site member access| `true` | `true` | `false`|
|Anyone can access| `true` | `true`| `true`|

The `"web-methods"` object must also contain a `"*"` key. The value for this key defines the default permissions that are applied to any function whose permissions you don't set manually.

Here is an example `permissions.json` file for a site with a backend file called `helperFunctions.jsw`. The file's functions are called `calculate`, `fetchData`, and `syncWithServer`. In this case anyone can call `calculate`, site members can call `syncWithServer`, and only site owners can call `fetchData`.

```json
{
  "web-methods": {
    "*": {
      "*": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": true
        }
      }
    },
    "backend/helperFunctions.jsw": {
      "calculate": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": true
        }
      },
      "fetchData": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": false
        },
        "anonymous": {
          "invoke": false
        }
      },
      "syncWithServer": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": false
        }
      }
    }
  }
}
```
