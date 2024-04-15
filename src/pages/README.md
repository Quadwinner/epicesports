# The Page Code Folder

This folder contains code files for each of the pages on your site as well as the [masterpage.js](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#global-site) file. The code you add to these files runs when visitors open pages on your site. These files correspond to the ones found in the [**Main Pages**](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#main-pages) section of the **Page Code** ![image](https://user-images.githubusercontent.com/89579857/184645988-6d4ee6d3-34ab-45bc-b914-5779a7de0cad.png) tab in the Velo sidebar.

When you add a page to your site in a Wix editor in your browser, a code file for that page gets added to your repo. The name of the file has 2 components: the name of the page that you define when you create it, and an internal ID string. The sections are separated by a period. 

![image](https://user-images.githubusercontent.com/89579857/188305074-6e2ee718-13b8-435d-9c75-bcb126f35718.png)

When you [add a dynamic page](https://support.wix.com/en/article/content-manager-about-dynamic-pages#adding-dynamic-pages) to your site 2 code files are added to the site's repo corresponding to the dynamic list and dynamic item pages.

When you open a page's code file, you see the same sample code that appears in these code files in Wix editors in your browser.  

![image](https://user-images.githubusercontent.com/89579857/184646571-1e14f166-2b86-4f21-bf57-83468251bca8.png)

When you delete a page in a Wix editor in your browser, the page's corresponding code file is deleted from your repo.

> **Note:**
> * You can't create new code files for pages from your IDE. To add a file, create a new page for your site in a Wix editor in your browser, and [sync](https://support.wix.com/en/article/velo-working-with-the-local-editor-beta#sync-design-changes-to-your-ide) your site with your local IDE.
> * Do not rename code files for pages. Wix uses these file names to associate the files with the appropriate pages on your site. If you rename a file, your code is ignored and a new code file is created for the page.

Learn more about [this repo's file structure](https://support.wix.com/en/article/velo-understanding-your-sites-github-repository-beta).
